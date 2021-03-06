/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import nodemailer from 'nodemailer';
import { Tools } from '../models/Tool';
import { Workflow } from '../models/Workflow';
import _debug from 'debug';
import EMAIL_STR from '../serverConf';
const debug = _debug('app:server:routes:health');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

/**
 * Fetch all tools. Order them by their `order` key. Load their center as well.
 */
router.get('/tools', async (ctx) => {
  try {
    const tools = await Tools
      .query(qb => qb.select())
      .fetch({ withRelated: ['centers'] });
    ctx.body = tools.toJSON({ omitPivot: true });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tools.');
  }
});

router.post('/tools/clicks/increment', async (ctx) => {
  const toolIds = ctx.request.body.toolIds;
  if (!toolIds || !toolIds.length) {
    ctx.throw(400, 'Tool Id required with request.');
    return;
  }
  try {
    const toolModels = await Tools
      .query(qb => qb.whereIn('id', toolIds))
      .fetch();

      ctx.body = await Promise.all(
        toolModels.map(model => {
          let clicks = model.get('clicks');
          return model
            .save({ clicks: ++clicks }, { patch: true, required: true })
            .then(newModel => newModel.toJSON());
        })
      );
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tools.');
  }
});

/**
 * Fetch all workflows.
 */
router.get('/workflows', async (ctx) => {
  try {
    const workflows = await Workflow.fetchAll();
    ctx.body = workflows.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining workflows.');
  }
});

/**
 * Send an email. This function essentially wraps a promise around the
 * {@link https://github.com/nodemailer/nodemailer#tldr-usage-example nodemailer API}.
 * @param  {nodemailerTransporter} transporter The transporter instance to use to send the
 * email. Created using
 * {@link https://github.com/nodemailer/nodemailer#transports nodemailer.createTransport()}
 * @param  {Object} opts nodemailer options
 * @return {[type]}             [description]
 */
function sendMail(transporter, opts) {
  return new Promise((resolve, reject) => {
    if (!transporter.sendMail) {
      reject('Transporter is invalid. Use nodemailer.createTransport()');
      return;
    }
    transporter.sendMail(opts, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * Add a workflow to the database and email Sherry upon adding it.
 * @param  {Object} ctx.request.body The workflow to be added to the database.
 */
router.post('/workflows/add', async (ctx) => {
  const workflow = ctx.request.body;
  if (!Object.keys(workflow).length) {
    ctx.throw(400, 'Workflow not sent with request.');
  }
  if (!workflow.type) {
    ctx.throw(400, 'Workflow requires a type');
  }
  try {
    const wf = await Workflow.forge(workflow).save().then(wfModel => wfModel.toJSON());
    const transporter = nodemailer
      .createTransport(EMAIL_STR);
    const mailOptions = {
      from: 'LINCS@amp.pharm.mssm.edu',
      to: 'sherry.jenkins@mssm.edu, avi.maayan@mssm.edu, edward.he@mssm.edu, moshe.silverstein@mssm.edu, denis.torre@mssm.edu',
      subject: 'A new workflow has been submitted',
      text: 'Hello,\n\n' +
        'This is a notification from http://amp.pharm.mssm.edu/LINCS that a ' +
        'new workflow has been submitted.\n\n' +
        `${wf.email ? `The submitter's email address is ${wf.email}.\n` : ''}` +
        `He/she is ${
          wf.type === 'experimentalist'
          ? 'an experimentalist.'
          : 'a computational biologist.'
        }\nTheir question/aim is ${wf.question}.`,
    };
    await sendMail(transporter, mailOptions);
    ctx.body = wf;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred adding workflow.');
  }
});

export default router;
