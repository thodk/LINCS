import React from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';

export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle={
          'Finding proteomic and epigenomic data from the same ' +
          'conditions profiled by the L1000 assay'
        }
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow} ${styles['pw-workflow']}`}>
          <p>
            The LINCS Proteomic Characterization Center for Signaling and Epigenetics
            (PCCSE) generates small molecule perturbations for (i) epigenetic modulators;
            (ii) neurodevelopment and disease modulators and (iii) signaling pathway
            modulators.
          </p>
          <p>
            The perturbations are assayed by <strong>P100</strong>, a targeted proteomic assay
            against 96 phosphopeptide probes that are commonly observed in diverse cell types;
            and <strong>GCP</strong>, a targeted proteomic assay against ~60 probes that
            monitor combinations of post-translational modifications on histones. The data
            is generated by using mass spectrometry techniques to characterize proteome level
            molecular signatures of responses to small molecule and genetic perturbations in
            a number of different cell lines.
          </p>
          <p>
            More information can be found at the
            Center’s <a href="https://panoramaweb.org/labkey/wiki/LINCS/Overview Information/page.view?name=LINCS%20PCCSE%20Overview" target="_blank">
            Panorama web portal</a>. PCCSE signature datasets can be searched, downloaded
            and browsed with piLINCS. piLINCS can be used to interactively browse the
            different profiles generated, filtered based on cell - perturbation - dose
            tuples, merged across different profiles for the same tuples.
          </p>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 text-xs-center m-b-1">
              <img
                src={require('./pilincs-screenshot.png')}
                alt="piLINCS Screenshot"
                className={styles['img-bordered']}
              />
            </div>
          </div>
          <p>
            iLINCS provides <a href="http://www.eh3.uc.edu/GenomicsPortals/DatasetLandingPage.do?data_set=p100Foundation156x1267" target="_blank">
            various</a> analysis for
            the <a href="http://www.eh3.uc.edu/GenomicsPortals/datasets.jsp?center=&assay=P100" target="_blank">
            P100 datasets</a>, it is possible to generate two-group sample differential
            expression signatures within a dataset, find differentially expressed proteins
            between multiple groups of samples, perform multi-group analysis for a specific
            protein list.
          </p>
          <img
            src={require('./ilincs-screenshot.png')}
            alt="iLINCS Screenshot"
            className={styles['img-bordered']}
          />
          </div>
        </div>
      </div>
    </div>
  );
}