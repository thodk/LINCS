import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import getIconLinks from 'utils/getIconLinks';
import { loadDataset } from 'actions/entities';
import PageBanner from 'components/PageBanner';
import Clustergram from 'containers/Clustergram';
import styles from './DatasetView.scss';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export class DatasetView extends Component {
  componentWillMount() {
    this.props.loadDataset(this.props.params.datasetId);
  }
  render() {
    const dataset = this.props.datasets[this.props.params.datasetId];
    if (!dataset) {
      return null;
    }
    const links = getIconLinks(dataset);
    const hasAnalysis = links.useSlicr || links.usePiLINCS || links.useMosaic || links.useILINCS;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title={`${dataset.method} (${dataset.lincsId})`}
          subTitle={dataset.description}
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Access & Analyze Data</h2>
              <table className={`table ${styles['metadata-table']}`}>
                <tbody>
                  <tr>
                    <td>LINCS ID</td>
                    <td>{dataset.lincsId}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{dataset.description}</td>
                  </tr>
                  <tr>
                    <td>Center</td>
                    <td>
                      {dataset.center.name} - <a href={dataset.sourceLink} target="_blank">
                      View at source</a>
                    </td>
                  </tr>
                  {
                    dataset.assay &&
                      <tr>
                        <td>Assay Type</td>
                        <td>{dataset.assay}</td>
                      </tr>
                  }
                  {
                    dataset.physicalDetection &&
                      <tr>
                        <td>Physical Detection</td>
                        <td>{dataset.physicalDetection}</td>
                      </tr>
                  }
                  {
                    dataset.dateRetrieved &&
                      <tr>
                        <td>Date Retrieved</td>
                        <td>{moment(dataset.dateRetrieved).format('MMMM Do, YYYY')}</td>
                      </tr>
                  }
                  <tr>
                    <td>Cite this Dataset</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Cite Links">
                        <a
                          className="btn btn-secondary"
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/ris`}
                        >
                          RIS Format (.ris)
                        </a>
                        <a
                          className="btn btn-secondary"
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/bib`}
                        >
                          BibTeX Format (.bib)
                        </a>
                        <a
                          className="btn btn-secondary"
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/enw`}
                        >
                          EndNote Format (.enw)
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Download</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Cite Links">
                        <a
                          className="btn btn-secondary"
                          href={`/LINCS/api/v1/datasets/${dataset.id}/download`}
                        >
                          Data Package
                        </a>
                        <a
                          className="btn btn-secondary"
                          href={`/LINCS/api/v1/datasets/${dataset.id}/download/gct`}
                        >
                          GCT File*
                        </a>
                      </div>
                    </td>
                  </tr>
                  {
                    hasAnalysis &&
                      <tr>
                        <td>Analyze</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="Cite Links">
                            {
                              links.useSlicr &&
                                <a
                                  className="btn btn-secondary"
                                  href="http://amp.pharm.mssm.edu/Slicr/"
                                  target="_blank"
                                >
                                  Analyze with Slicr
                                </a>
                            }
                            {
                              links.usePiLINCS &&
                                <a
                                  className="btn btn-secondary"
                                  href="http://eh3.uc.edu/pilincs"
                                  target="_blank"
                                >
                                  Analysis with piLINCS
                                </a>
                            }
                            {
                              links.useMosaic &&
                                <a
                                  className="btn btn-secondary"
                                  href="http://amp.pharm.mssm.edu/p100mosaic"
                                  target="_blank"
                                >
                                  P100 Mosaic
                                </a>
                            }
                            {
                              links.useILINCS &&
                                <a
                                  className="btn btn-secondary"
                                  href={`http://eh3.uc.edu/GenomicsPortals/DatasetLandingPage.do?data_set=${dataset.lincsId}`}
                                  target="_blank"
                                >
                                  Analyze with iLINCS
                                </a>
                            }
                          </div>
                        </td>
                      </tr>
                  }
                </tbody>
              </table>
            </div>
            <div className="col-xs-12">
              <h2>Clustergram</h2>
              <Clustergram datasetId={dataset.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DatasetView.propTypes = {
  loadDataset: PropTypes.func.isRequired,
  datasets: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  loadDataset,
})(DatasetView);