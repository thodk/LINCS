/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Collapsible from 'react-collapsible';
import CannedAnalysisCard from 'components/CannedAnalysisCard';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';
import cannedAnalysisImage from '../../../static/files/canned_analysis.png';

const generateUrlForDataset = (dataset) => {
  const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
  const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
  let datasetUrl;
  if (dataset.indexOf('HMS') === 0) {
    datasetUrl = hmsBaseDatasetUrl + dataset.slice(4);
  } else {
    datasetUrl = ldpBaseDatasetUrl + dataset;
  }
  return datasetUrl;
};

export default class CannedAnalysisModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }

  _updateSearchQuery = (event) => {
    this.setState({searchQuery: event.target.value.toLowerCase()});
  }

  _filterCannedAnalyses = (analyses) => {
    const query = this.state.searchQuery;
    if (query.length === 0) return analyses;
    return analyses.filter((analysis) => {
      const descMatch = analysis.canned_analysis_description.toLowerCase().indexOf(query);
      const titMatch = analysis.title.toLowerCase().indexOf(query);
      const subtMatch = analysis.subtitle.toLowerCase().indexOf(query);
      const toolMatch = analysis.tool_name.toLowerCase().indexOf(query)
      return descMatch !== -1 || titMatch !== -1 || subtMatch !== -1 || toolMatch !== -1;
    })
  }

  render() {
    const analyses = this._filterCannedAnalyses(cannedAnalysisSeed);
    return (
      <div className="row">
        <div className="col-xl-12">
          <div className="col-xs-12 col-md-12 col-xl-12">
            <h3 className={styles['section-title']}>Canned Analyses</h3>
            <p>
              A <em>Canned Analysis</em> is a pre-run analysis of a biomedical dataset
              by a computational tool.

              It is defined by 3 key elements: 1) Dataset accession(s),
              2) Name of computational tool, and 3) a link to a webpage which
              contains the results of the analysis browseable by users. This
              is visualized by the figure below.
            </p>

            <img className={styles['ca-image']} src={cannedAnalysisImage} />

            <p>
              For each canned analysis below, you can learn more about the specific
              analysis by hovering over their respective subtitles for a full description.

              You can additionally hover over the informational icon on the top right corner
              and click on a dataset of interest for more information on the dataset being
              analyzed.
            </p>
          </div>

          <div className="col-xs-12 col-md-12 col-xl-12">
            <input
              className={`form-control ${styles['search-bar']}`}
              onChange={this._updateSearchQuery}
              value={this.state.value}
              style={{ display: 'block' }}
              placeholder="Search"
            />
          </div>

          {
            analyses && analyses.length > 0 ?
            analyses.map((ca, idx) => {
              return (
                <div key={idx} className="col-xs-12 col-md-6 col-xl-4">
                  <CannedAnalysisCard ca={ca} />
                </div>
              );
            }) :
            <h5 className="m-t-3 text-xs-center">
              No analysis found. Please try again later.
            </h5>
          }
        </div>
      </div>
    );
  }
}
