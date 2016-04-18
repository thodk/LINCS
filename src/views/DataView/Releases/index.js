import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import range from 'lodash/range';

import DataTree from 'containers/DataTree';
import PageBanner from 'components/PageBanner';
import { loadDatasets } from 'actions/entities';
import handleResponse from 'utils/handleResponse';
import SearchResult from './SearchResult';
import ResultPlaceholder from './ResultPlaceholder';
import PageNav from 'components/PageNav';
import SearchBar from 'components/SearchBar';
import styles from './Releases.scss';

const mapStateToProps = (state) => ({ datasets: state.entities.datasets });
export class Releases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      q: '',
      searchResultIds: [],
      showSearchResults: false,
    };
  }

  componentWillMount() {
    this.props.loadDatasets();
    this._findResults(this.props.location.query.q);
  }

  componentWillReceiveProps = (props) => { this._findResults(props.location.query.q); }

  _findResults = (query) => {
    if (!query) {
      this.setState({
        isSearching: false,
        showSearchResults: false,
      });
      return;
    }
    this.setState({ isSearching: true });
    fetch(`/LINCS/api/v1/datasets/search?q=${query}`)
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(datasets => {
        this.setState({
          searchResultIds: datasets.map(ds => ds.id),
          isSearching: false,
          showSearchResults: true,
        });
      });
  }

  _backToTree = () => { this.setState({ showSearchResults: false }); }

  render() {
    const searchQ = this.props.location.query.q;
    const { datasets } = this.props;
    const { searchResultIds, isSearching, showSearchResults } = this.state;
    return (
      <div className={styles.wrapper}>
        <PageBanner title="LINCS Data Releases" />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Releases" isDataPage />
            <div className="col-md-9 col-md-pull-3">
              <h2>Global Visualization of LINCS Data</h2>
              <p>
                This page provides three modes of global visual summaries of the currently
                available <Link to="/centers">LINCS Phase II</Link> datasets. All
                six <Link to="/centers/data-and-signature-generating-centers">LINCS Data
                and Signature Generation Centers (DSGCs)</Link> have released data to the
                community. These data are released according to the LINCS
                consortium <Link to="/data/release-policy">data release policy</Link>. The
                visualized summaries provide unified access with links to the data, metadata
                and QC documentation hosted on the respective DSGCs’ web portals. Some of these
                released datasets are also linked to <Link to="/applications">analysis
                tools</Link> developed by the <Link to="/centers/dcic">BD2K-LINCS Data
                Coordination and Integration Center</Link>.
              </p>
              <div className={styles['search-wrap']}>
                <SearchBar searchQuery={searchQ} />
              </div>
              {
                isSearching &&
                <div className={styles.placeholders}>
                  {range(6).map((index) => <ResultPlaceholder key={index} />)}
                </div>
              }
              {
                !isSearching && showSearchResults &&
                <div className={styles['search-results']}>
                  <div className={`row ${styles.info}`}>
                    <div className="col-xs-6">
                      <a className={styles.back} onClick={this._backToTree}>
                        <i className="fa fa-chevron-left" /> Back to Tree View
                        </a>
                    </div>
                    <div className="col-xs-6">
                      <p className={styles.count}>
                        {searchResultIds.length} results
                        for <span className={styles.query}>{searchQ}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.datasets}>
                    {
                      searchResultIds.map(id =>
                      <SearchResult key={id} dataset={datasets[id]} />)
                    }
                  </div>
                </div>
              }
              {
                !isSearching && !showSearchResults &&
                <div className={styles['tree-wrap']}>
                  <DataTree />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Releases.propTypes = {
  datasets: PropTypes.object,
  location: PropTypes.object,
  loadDatasets: PropTypes.func,
};

export default connect(mapStateToProps, { loadDatasets })(Releases);
