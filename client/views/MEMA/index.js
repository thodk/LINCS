import React from 'react';
import PageBanner from 'components/PageBanner';
import { Link } from 'react-router';
import styles from './mema.scss';

export default () => (
  <div className={styles.wrapper}>
    <PageBanner
      title="Featured Interactive Data Visualization"
      subTitle={'Visualization of MEP-LINCS Data Using Google Tensor Board'}
    />
    <div className="container">
      <div className="row">
        <div className={`col-xs-12 ${styles['iframe-wrap']}`}>
          <iframe
            id="mema-viz"
            className={styles.iframe}
            frameBorder="0"
            scrolling="no"
            src="https://maayanlab.github.io/MEMAboard/"
          />
        </div>
        <div className="col-xs-12">
          <div className={styles['viz-description']}>
            <h4>Overview:</h4>
            <p>
              This interactive visualization of LINCS data includes
              2,736 microenvironment perturbations (MEPs),
              generated by the&nbsp;
              <Link to="centers/data-and-signature-generating-centers/mep-lincs">
                MEP LINCS Center
              </Link> using the&nbsp;
              <a href="https://www.ncbi.nlm.nih.gov/pubmed/23093325" target="_blank">
                Microenvironment Microarray
              </a> (MEMA) platform. This assay visualizes cellular and
              morphological phenotypes of MCF10A, HMEC122L, and
              HMEC140L cell lines in the context of cellular conditions
              that combine 57 endogenous ligands with 48 extracellular
              matrix proteins (ECMps). Additional information about
              the MEMA experiment can be found on&nbsp;
              <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486" target="_blank">
                Synapse
              </a>.
            </p>
            <h4>Instructions:</h4>
            <p>
              Users can dynamically highlight, search, and filter data points,
              as well as to adjust the display by rotating (left click),
              panning (right click), and zooming (scroll wheel) through
              the different embeddings. The clustergrammer visualization
              also allows users to zoom, pan, and filter through the underlying
              data.  On the PCA tab, users can select define which components
              they are interested in viewing. The t-SNE tab runs in real time,
              and users can adjust the learning rate and perplexity. Users can
              also overlay metadata labels onto the data projections, with
              either categorical (eg. ecmp, ligand) or continuous (gradient)
              variables, which encode additional information into the different
              visualizations to maximize knowledge extraction. Alternatively,
              users can select the “images” tensors to view datapoints as raw
              image thumbnails of the cell spots.  Use the
              “bounding box selection” tool to highlight clusters of interest,
              and the “isolate points” button to view a subset of the data.
            </p>

            <p className={styles.credits}>
              This interactive visualization was implemented by
              the&nbsp;
              <a href="http://lincs-dcic.org" target="_blank">
                BD2K-LINCS DCIC
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
