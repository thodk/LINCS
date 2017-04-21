/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import styles from './CannedAnalysisCard.scss';

export default class CannedAnalysisCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const width = w.innerWidth;
    const height = w.innerHeight;
    this.setState({ width, height });
  }

  _generateUrlForDataset(dataset) {
    const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
    const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
    let datasetUrl;
    if (dataset.indexOf('HMS') === 0) {
      datasetUrl = hmsBaseDatasetUrl + dataset.slice(4);
    } else {
      datasetUrl = ldpBaseDatasetUrl + dataset;
    }
    return datasetUrl;
  }

  render() {
    const { ca } = this.props;
    return (
      <div className={styles.ca}>
        <div className={styles['ca-inner']}>
          <a href={ca.canned_analysis_url} className={styles['ca-link']} target="_blank">
            <img
              src={require(ca.screen_path)}
              className={styles.thumbnail}
              alt={ca.lca_accession}
            />
          </a>

          <div className={styles['ca-details']}>
            <a href={ca.canned_analysis_url} className={styles['ca-link']} target="_blank">
              <label className={styles['ca-title']}>
                {ca.title}
              </label>
              <span
                data-tip="Information is not available at this time."
                data-for={ca.canned_analysis_description}
              >
                <span className={styles['ca-center']}>{ca.subtitle}</span>
              </span>
            </a>

            <div className={styles['ca-description']}>
              {
                ca.canned_analysis_description.length > 185 && this.state.width >= 1200 ?
                  <span
                  >
                    {
                      this.state.width >= 1200 ?
                      null
                      : ca.canned_analysis_description.split(' ').slice(0, 35).join(' ')
                    }
                  </span>
                  : <span>{ca.canned_analysis_description}</span>
              }

              {
                this.state.width >= 1200 ?
                  <ReactTooltip
                    id={ca.canned_analysis_description}
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <div style={{ maxWidth: '10rem' }}>
                      {ca.canned_analysis_description}
                    </div>
                  </ReactTooltip>
                : null
              }
            </div>
            <span className={styles['ca-tool-name']}>Analyzed with&nbsp;
              <a href={ca.tool_url} className={styles['ca-link']} target="_blank">
                {ca.tool_name}
              </a>
            </span>
            <i
              className={`fa fa-info-circle ${styles.tooltip}`}
              aria-hidden="true"
              data-tip="Information is not available at this time."
              data-for={`${ca.datasets.join('_')}_ds`}
            />
            <ReactTooltip
              id={`${ca.datasets.join('_')}_ds`}
              className={styles['tooltip-stay']}
              delayHide={500}
              effect="solid"
              place="right"
              type="dark"
              effect="float"
            >
              <span className={styles['ds-title']}>
                {ca.datasets.length > 1 ? "Datasets" : "Dataset" }
              </span>
              {
                ca.datasets.map(ds => (
                  <a
                    href={this._generateUrlForDataset(ds)}
                    target="_blank"
                    key={ds}
                    className={styles.ds}
                  >
                    {ds}
                  </a>
                ))
              }
            </ReactTooltip>
          </div>
        </div>
      </div>
    );
  }
}


CannedAnalysisCard.propTypes = {
  ca: PropTypes.object,
};