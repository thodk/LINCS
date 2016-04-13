import React from 'react';
import { Link } from 'react-router';

import DataTree from 'containers/DataTree';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import SearchBar from 'components/SearchBar';
import styles from './Releases.scss';

export default function Releases(/* props */) {
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
            <div className="col-lg-10 col-lg-offset-1">
              <div className={styles['search-wrap']}>
                <SearchBar />
              </div>
              <DataTree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
