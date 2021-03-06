import React, { Component } from 'react';
// import { Link } from 'react-router';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import iLINCSGenesWorkflow from '../images/ilincs-genes-workflow.png';


export default class Workflow extends Component {

  static subTitle = 'Analyze my genes against LINCS data'
  static path = 'analyze-my-genes-against-lincs-data'

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Computational Biologist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow}`}>
              <p>
                The <a href="http://www.ilincs.org/" target="_blank">iLINCS (Integrative LINCS) portal</a> facilitates
                interrogation of LINCS transcriptomic and proteomic
                datasets with user-defined gene lists. The workflow is as follows:
              </p>
              <ol>
                <li>
                  Paste a list of gene IDs (Entrez Gene IDs or HGNC approved symbols) or
                  create one from a library of gene lists.
                </li>
                <li>Select a LINCS or non-LINCS dataset for analysis</li>
                <li>
                  Perform statistical analysis of differential gene or protein expression for
                  your submitted genes
                </li>
                <li>Export or further analyze these results</li>
                <li>
                  Repeat the analysis for different sample groups on the same datasets
                  <br />
                  or
                  <br />
                  Repeat the analysis on a different dataset
                </li>
              </ol>
              <img
                className={styles['img-bordered']}
                src={iLINCSGenesWorkflow}
                alt="iLINCS screenshot"
              />
              <p className={styles['post-script']}>
                For more, see the <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U8d0lSxu4hxaPX64yJUOlzQ" target="_blank">iLINCS video tutorial</a> on YouTube
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
