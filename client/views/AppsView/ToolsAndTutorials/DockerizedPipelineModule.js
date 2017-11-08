import React, { Component } from 'react';
import styles from '../AppsView.scss';

import Pipeline from 'components/Pipeline';
import dockerPipelineImage from 'static/files/DockerizePipline.png';

export default class DockerizedPipelineModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Shuffled',
    };
  }

  render() {
    return (
      <div className="row">
        <div className="row" style={{ paddingLeft: '0.9375rem' }}>
          <div className="col-xs-12 col-md-12 col-xl-6">
            <h3
              className={styles['section-title']}
            >
              Dockerized Pipelines
            </h3>
            <br />
            <p>
              To standardize the data processing pipelines for all LINCS-generated
              data the <a href="http://lincsproject.org/LINCS/centers/dcic">
              BD2K-LINCS DCIC</a> is testing and then containerizing
              pipelines so that they can be re-deployed in a reproducible manner.
              Each of these Docker containers provides a platform for processing and analyzing
              data generated by the <a href="http://lincsproject.org/LINCS/centers/data-and-signature-generating-centers">
              LINCS Data and Signature Generation Centers</a>. The pipelines are
              committed into Github with instructions on how to deploy and execute
              them. Each Docker container is provided in the form of an RStudio
              instance.
            </p>
          </div>

          <div className="col-xs-12 col-md-12 col-xl-6">
            <img
              className={styles['doc-image']}
              src={dockerPipelineImage}
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row">
        {
          <div className="col-xs-12 col-md-12 col-xl-6">
            <Pipeline
              center="MEP LINCS"
              assayType="MEMA"
              title="Docker container for generating MEMA processing pipelines in RStudio"
              description="The processing pipeline starts with Level 1 data and
              produces Level 2, Level 3 and Level 4,
              along with interactive visualization of the data."
              centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/mep-lincs"
              githubUrl="https://github.com/uc-bd2k/mema"
              dockerHubUrl="https://hub.docker.com/r/ucbd2k/mema/"
              assayUrl="https://www.synapse.org/#!Synapse:syn2862345/wiki/232002"
              toolTipItems=""
            />
          </div>
        }
        {
          <div className="col-xs-12 col-md-12 col-xl-6">
            <Pipeline
              center="LINCS PCCSE"
              assayType="P100 and GCP"
              title="Docker container for generating P100 and GCP processing pipelines in RStudio"
              description="The processing pipeline starts with Level 2 data (
              raw numerical data, RPT) and ultimately produces Level 4 data
              (differential quantification, DIFF)."
              centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/lincs-pccse"
              githubUrl="https://github.com/uc-bd2k/pccse"
              dockerHubUrl="https://hub.docker.com/r/ucbd2k/pccse/"
              assayUrl="https://panoramaweb.org/labkey/wiki/LINCS/Overview%20Information/download.view?entityId=68f8506d-4b32-1033-b6e2-3013bb9bbdbe&name=LINCS_PCCSE-ePoster-2015.pdf"
              toolTipItems=""
            />
          </div>
        }
        {
          <div className="col-xs-12 col-md-12 col-xl-6">
            <Pipeline
              center="NeuroLINCS"
              assayType="RNA-seq"
              title="Docker container for generating RNA-seq signature (Step-2)
              processing pipelines in RStudio"
              description="The processing pipeline starts with level 3 (raw counts) data
              and ultimately produces Level 4 data (differential expression
              profile)."
              centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/neurolincs"
              githubUrl="https://github.com/uc-bd2k/Nl_rnaseq"
              dockerHubUrl="https://hub.docker.com/r/ucbd2k/nl_rnaseq/"
              assayUrl="http://neurolincs.org/pdf/NeuroLINCS-RNAseq-protocol-26OCT2016.pdf"
              toolTipItems=""
            />
          </div>
        }
        {
          <div className="col-xs-12 col-md-12 col-xl-6">
            <Pipeline
              center="HMS LINCS"
              assayType="Fluorescence Imaging Cell Count"
              title="Docker container for generating Growth-rate inhibition (GR)
              processing pipelines in RStudio"
              description="The processing pipeline starts with Level 2 data
              (cell counts) and creates Level 3
              data (average cell counts) and Level 4 data (dose response curve
              metrics)."
              centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/hms-lincs"
              githubUrl="https://github.com/uc-bd2k/hms-cellcount/"
              dockerHubUrl="https://hub.docker.com/r/ucbd2k/hms-cellcount/"
              assayUrl="http://lincs.hms.harvard.edu/db/datasets/20256/"
              toolTipItems=""
            />
          </div>
        }
        </div>
      </div>
    );
  }
}