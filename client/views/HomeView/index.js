import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// import handleResponse from 'utils/handleResponse';
import Tool from 'components/Tool';
import Twitter from 'containers/Twitter';
import Publication from 'containers/Publication';
import Announcements from 'containers/Announcements';
// import HomeCACard from './HomeCACard';
import { loadPublications } from 'actions/pubsNews';
import { loadTools } from 'actions/toolsWorkflows';
// import { loadCannedAnalyses } from 'actions/cannedAnalyses';
import { initialCategories as categories } from '../PublicationsView';
import styles from './HomeView.scss';

import dmoa from 'static/files/dmoa-firework.png';

const mapStateToProps = (state) => ({
  // isFetching: state.cannedAnalyses.isFetching ||
  // state.pubsNews.isFetching ||
  // state.toolsWorkflows.isFetching ||
  // state.announcements.isFetching,
  // ca: state.cannedAnalyses.analyses,
  publications: state.pubsNews.publications,
  tools: state.toolsWorkflows.tools,
  announcements: state.announcements.announcements,
});

export class HomeView extends Component {
  componentWillMount = () => {
    this.props.loadPublications();
    // this.props.loadCannedAnalyses();
    this.props.loadTools();
  }

  shuffleList = (list) => {
    const result = list.slice(0);
    for (let i = result.length - 1; i > 0; i--) {
      const randPos = Math.floor(Math.random() * (i + 1));
      const temp = result[i];
      result[i] = result[randPos];
      result[randPos] = temp;
    }
    return result;
  }

  render() {
    // const ca = this.props.ca || [];
    // const randCA = ca[Math.floor(Math.random() * ca.length)];
    const pubs = this.props.publications
      .filter(pub => !!pub.showAtHomeOrder)
      .sort((a, b) => {
        const result = a.showAtHomeOrder > b.showAtHomeOrder;
        return result ? 1 : -1;
      });
    const tools = this.shuffleList(this.props.tools).slice(0, 6);
    return (
      <div className={styles.wrapper}>
      {/* Banner
        * ================================================================ */}
        <div className={styles.homeBannerWrap}>
          <div className={`container ${styles.homeBanner}`}>
            <div className={styles.intro_Home}>
              The Library of Network-Based Cellular Signatures (LINCS) Program aims to create a
              network-based understanding of biology by cataloging changes in gene expression
              and other cellular processes that occur when cells are exposed to a variety of
              perturbing agents.
            </div>
            <a
              href="http://lincsportal.ccs.miami.edu/dcic-portal/"
              target="_blank"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-discover']}`}
            >
              Discover LINCS Data
            </a>
            <Link
              to="/tools"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-td']}`}
            >
              Workflows &amp; Tools
            </Link>
          </div>
        </div>

        {/* Consortium / Annual Meeting
          * ================================================================ */}
        <div className={styles['consortium-wrap']}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section}`}>
                <div className="row">
                  <div className={`col-xs-12 col-md-6 ${styles.consortium}`}>
                    <h3>The LINCS Consortium</h3>
                    <p>
                      By generating and making public data that indicates how cells
                      respond to various genetic and environmental stressors, the
                      LINCS project will help us gain a more detailed understanding
                      of cell pathways and aid efforts to develop therapies that
                      might restore perturbed pathways and networks to their normal
                      states. The LINCS website is a source of information for the
                      research community and general public about the LINCS project.
                      This website along with the LINCS Data Portal contains details
                      about the assays, cell types, and perturbagens that are
                      currently part of the library, as well as links to participating
                      sites, data releases from the sites, and software that can be
                      used for analyzing the data.
                    </p>

                    <div className={`${styles['datatype-links-container']}`}>
                      <div className="row">
                        <div className={`col-xs-3 col-sm-3 col-md-3 ${styles['datatype-link']}`}>
                          <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                            <img
                              src="/LINCS/files/datatype_logos/dataset-logo.png"
                              className={`${styles['datatype-logo']}`}
                              alt="presentation"
                            />
                            <h5 className={`${styles['datatype-title']}`}>Datasets</h5>
                          </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-3 ${styles['datatype-link']}`}>
                          <a href="http://lincsportal.ccs.miami.edu/SmallMolecules/" target="_blank">
                            <img
                              src="/LINCS/files/datatype_logos/small-molecule-logo.png"
                              className={`${styles['datatype-logo']}`}
                              alt="presentation"
                            />
                            <h5 className={`${styles['datatype-title']}`}>Small Molecules</h5>
                          </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-3 ${styles['datatype-link']}`}>
                          <a href="http://lincsportal.ccs.miami.edu/cells/" target="_blank">
                            <img
                              src="/LINCS/files/datatype_logos/cellline-logo.png"
                              className={`${styles['datatype-logo']}`}
                              alt="presentation"
                            />
                            <h5 className={`${styles['datatype-title']}`}>Cells</h5>
                          </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-3 ${styles['datatype-link']}`}>
                          <Link to={{ pathname: '/tools', query: { initialTab: 'ca' } }}>
                            <img
                              src="/LINCS/files/datatype_logos/canned-analyses-logo.png"
                              className={`${styles['datatype-logo']}`}
                              alt="presentation"
                            />
                            <h5 className={`${styles['datatype-title']}`}>Canned Analyses</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`col-xs-12 col-md-6 ${styles.am}`}>
                    {
                      // !this.props.isFetching && (
                      //   <div>
                      //     <h3 className={styles.title}>Featured LINCS Canned Analysis</h3>
                      //     <h5 className={styles['ca-grouping']}>
                      //       {ca.length && randCA.grouping}
                      //     </h5>
                      //     <HomeCACard ca={randCA} />
                      //   </div>
                      // )
                    }

                    <h3 className={styles.title}>Featured Data Visualization</h3>
                    <div className={styles['carousel-pad']}>
                      <div className={styles['carousel-item-wrap']}>
                        <Link
                          to="/dmoa"
                          className={styles['carousel-item-head']}
                        >
                          <h5 className={styles['carousel-item-title']}>
                            <strong>
                              Global Visualization of Drug-Induced
                              L1000 Transcriptomic Signatures
                            </strong>
                          </h5>
                          <div className={styles['carousel-img-wrap']}>
                            <img
                              src={dmoa}
                              className={`${styles['carousel-img']} ${styles.swg}`}
                              alt="presentation"
                            />
                          </div>
                        </Link>
                        <p className={styles.meeting}>
                          This is an interactive visualization
                          of 17,041 L1000 drug-induced gene expression signatures,
                          collected from 63 cell lines treated with 3,713
                          drugs/compounds. This data is available on the
                          Gene-Expression Omnibus (GEO) accession number&nbsp;
                          <a
                            href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE92742"
                            target="_blank"
                          >GSE92742</a>


                        , as well as on the&nbsp;
                          <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                            LINCS Data Portal
                          </a> (LDP). The&nbsp;
                          <Link
                            to="centers/data-and-signature-generating-centers/lincs-transcriptomics"
                          >
                            Broad Center for Transcriptomics
                          </Link> recently published a paper describing the L1000
                          data collected for phase I (
                          <a href="http://biorxiv.org/content/early/2017/05/10/136168" target="_blank">
                            bioRxiv
                          </a>).

                          More interactive visualizations can be found at&nbsp;
                          <a href="https://clue.io" target="_blank">clue.io</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*
                  <div className={`col-xs-12 col-md-6 ${styles.am}`}>
                    <h3 className={styles.title}>2016 LINCS Consortium Meeting</h3>
                    <div className={styles.carousel}>
                      <Carousel autoplay infinite aps={5000}>
                        {carouselImgs}
                      </Carousel>
                    </div>
                    <p className={styles.meeting}>
                      The 2016 LINCS Consortium Meeting was held September 19-20,
                      at the NIH campus in Bethesda, MD. This two-day meeting brought
                      together the six&nbsp;
                      <Link to="centers/data-and-signature-generating-centers">
                        LINCS Data and Signature Generation Centers
                      </Link>
                      , the&nbsp;
                      <Link to="centers/dcic">
                        BD2K-LINCS Data Coordination and Integration Center
                      </Link>, NIH
                      extramural staff, and external LINCS collaborators.&nbsp;
                      <Link to="community/consortium-meetings">
                        Meeting Agenda
                      </Link>
                    </p>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications / Tools
          * ================================================================ */}
        <div className={styles['pubs-wrap']}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section} ${styles['pub-section']}`}>
                <div className="row">
                  <div className={`col-xs-12 col-md-7 ${styles.publications}`}>
                    <h3>Recent Publications</h3>
                    {
                      pubs && pubs.map(p =>
                        <Publication
                          redirect
                          key={p.id}
                          pub={p}
                          categories={Object.keys(categories)}
                        />
                      )
                    }
                    <Link to="/publications">More publications...</Link>
                  </div>
                  <div className={`col-xs-12 col-md-5 ${styles.tools}`}>
                    <h3 className={styles.title}>Featured LINCS Tools</h3>
                    {
                      tools && tools.map((tool, idx) =>
                        <Tool
                          homeview
                          key={idx}
                          tool={tool}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Announcements />
        {/* Twitter
          *================================================================= */}
        <div className={styles.tw}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
                <div className="row">
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
          {/*
            <div className={`${styles.section} ${styles['social-section']}`}>
            <div className="container">
            <h3 className={styles.title}>Get in Touch</h3>
            <div className="row">
            <div className={`col-xs-12 col-md-6 ${styles['social-left']}`}>
            <div className={styles.youtube}>
            <p>
            Access everything from application tutorials and workflows to
            recaps of meetings and seminars on the NIH LINCS Program
            YouTube channel
            </p>
            <a
            href="https://www.youtube.com/channel/UCNcDd4x8PsUZpt4U2Xa8sfg"
            className={`btn ${styles['btn-secondary-outline']}`}
            >
            NIH LINCS Program YouTube channel
            </a>
            </div>
            <div className={styles.contact}>
            <p><strong>More questions about the NIH LINCS Program?</strong></p>
            <p>
            Be sure to check out the <Link to="/about#q-a">Q & A section</Link> first
            and don't be afraid to <a href={mailLink}>contact us</a> with additional
            questions!
            </p>
            </div>
            </div>
            </div>
            </div>
            </div>
          */}
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  isFetching: PropTypes.bool,
  loadPublications: PropTypes.func,
  publications: PropTypes.array,
  loadTools: PropTypes.func,
  tools: PropTypes.array,
  // loadCannedAnalyses: PropTypes.func,
  // ca: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadPublications,
  loadTools,
  // loadCannedAnalyses,
})(HomeView);
