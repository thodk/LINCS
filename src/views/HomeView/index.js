import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import handleResponse from 'utils/handleResponse';
import Twitter from 'containers/Twitter';
import { loadPublications } from 'actions/pubsNews';
import styles from './HomeView.scss';

const mapStateToProps = (state) => ({
  publications: state.pubsNews.publications,
});

export class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentDatasets: [],
    };
  }

  componentWillMount = () => {
    this.props.loadPublications();
  }

  componentDidMount() {
    fetch('/LINCS/api/v1/datasets/recent')
      .then(handleResponse)
      .then(response => response.json())
      .then(recentDatasets => {
        this.setState({ recentDatasets });
      });
  }

  render() {
    console.log(this.state.recentDatasets);
    const { publications } = this.props;
    const pubs = publications
      .filter(pub => !!pub.showAtHomeOrder)
      .sort((a, b) => {
        const result = a.showAtHomeOrder > b.showAtHomeOrder;
        return result ? 1 : -1;
      });
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={`container ${styles.animated}`}>
            <img src={require('./cube.png')} alt="NIH LINCS Program" />
            <p className={styles.lead}>
              The Library of Network-Based Cellular Signatures (LINCS) Program aims to create a
              network-based understanding of biology by cataloging changes in gene expression
              and other cellular processes that occur when cells are exposed to a variety of
              perturbing agents.
            </p>
            <Link
              to="/data"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-discover']}`}
            >
              Discover LINCS Data
            </Link>
            <Link
              to="/applications"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-td']}`}
            >
              Apps & Workflows
            </Link>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className={styles.section}>
                  <h3 className={styles.title}>Recent Dataset Releases</h3>
                  <div className="row">
                    {
                      this.state.recentDatasets.map(ds =>
                        <div key={ds.id} className="col-xs-12 col-sm-6 col-md-4">
                          <h5>{ds.method}</h5>
                          <p>{ds.center.name}</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-lg-push-7">
                <div className={styles.section}>
                  <h3 className={styles.title}>Access LINCS Data</h3>
                  <div className={styles.center}>
                    <a
                      className={`btn ${styles['btn-lincs']}`}
                      href="http://lincsportal.ccs.miami.edu/datasets/"
                      target="_blank"
                    >
                      Launch LINCS Data Portal
                    </a>
                  </div>
                  <p>
                    The LINCS Data Portal provides a unified interface for searching LINCS
                    dataset packages and reagents.
                  </p>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.title}>Recent LINCS Tools</h3>
                  <div className={styles.center}>
                    <a
                      className={`btn ${styles['btn-lincs']}`}
                      href="http://lincs-dcic.org/#/#quick-start"
                      target="_blank"
                    >
                      Quick Start to LINCS Tools
                    </a>
                  </div>
                  <div className={styles.group}>
                    <h5>LINCS L1000 Slicr</h5>
                    <p>
                      Slicr is a metadata search engine that searches for LINCS L1000 gene
                      expression profiles and signatures matching user's input parameters.
                    </p>
                    <a href="http://amp.pharm.mssm.edu/Slicr" target="_blank">Visit website</a>
                  </div>
                  <div className={styles.group}>
                    <h5>L1000CDS2</h5>
                    <p>
                      L1000CDS2 queries gene expression signatures against the LINCS L1000 to
                      identify and prioritize small molecules that can reverse or mimic the
                      observed input expression pattern.
                    </p>
                    <a href="http://amp.pharm.mssm.edu/L1000CDS2/" target="_blank">Visit website</a>
                  </div>
                  <div className={styles.group}>
                    <h5>iLINCS</h5>
                    <p>
                      Provides a 'one-stop' user interface to analyze differential gene
                      expression in a dataset identified via
                      the <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">LINCS Data Portal</a>.
                      Users are able to query gene lists
                      to <a href="http://amp.pharm.mssm.edu/Enrichr" target="_blank">Enrichr</a> and/or
                      re-analyze, interpret and export results.
                    </p>
                    <a href="http://eh3.uc.edu/GenomicsPortals/Lincs.jsp" target="_blank">Visit website</a>
                  </div>
                  <div className={styles.group}>
                    <h5>piLINCS</h5>
                    <p>
                      piLINCS provides access to proteomic profiles generated by the
                      LINCS Consortium.
                    </p>
                    <a href="http://eh3.uc.edu/pilincs/#/" target="_blank">Visit website</a>
                  </div>
                </div>
                <div className={styles.section}>
                  <div className={styles['twitter-bird']}>
                    <img src={require('./twitter-bird.svg')} alt="Twitter logo" />
                  </div>
                  <Twitter />
                </div>
              </div>
              <div className="col-lg-7 col-lg-pull-5">
                <div className={styles.section}>
                  <h3 className={styles.title}>Announcements</h3>
                  <h4>LINCS Outreach Meeting 2016</h4>
                  <div className={styles.group}>
                    <p className={`clearfix ${styles.justify}`}>
                      <iframe
                        className={styles.ajay}
                        src="https://www.youtube.com/embed/MwJoLfc_LuM?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i&showinfo=0"
                        frameBorder="0"
                        allowFullScreen
                      />
                      On March 10-11, 2016, the LINCS Outreach Meeting was held at the
                      University of California, Irvine. We invited the research community to
                      come see examples of LINCS in action and learn how to effectively work
                      with these unprecedented datasets. The first day of the meeting brought
                      together the centers of the LINCS Consortium to review progress to date
                      and discuss the next steps for data integration and analysis across the
                      centers. The meeting included an outreach program with experts in stem
                      cell biology, and big data management.
                    </p>
                    <a href="https://www.youtube.com/playlist?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i">
                      Watch Videos
                    </a>
                  </div>
                  <h4>LINCS Data Science Research Webinars</h4>
                  <div className={styles.group}>
                    <h5>Detection and Removal of Spatial Bias in Multi-Well Assays</h5>
                    <p><em>May 24, 2016</em> - Alexander Lachmann PhD, Columbia University</p>
                    <Link to="/community/webinars">Learn More</Link>
                  </div>
                  <div className={styles.group}>
                    <h5>
                      Construction, Characterization and Validation of Multiscale Gene Networks
                      in Cancer
                    </h5>
                    <p>
                      <em>June 28, 2016</em> - Bin Zhang PhD, Icahn School of Medicine at
                      Mount Sinai
                    </p>
                    <Link to="/community/webinars">Learn More</Link>
                  </div>
                </div>
                <div className={styles.section}>
                  <div className={styles.group}>
                    <h3 className={styles.title}>The LINCS Consortium</h3>
                    <p className={styles.justify}>
                      LINCS aims to create a network-based understanding of biology by
                      cataloging changes in gene expression and other cellular processes
                      that occur when cells are exposed to a variety of perturbing agents,
                      and by using computational tools to integrate this diverse information
                      into a comprehensive view of normal and disease states that can be
                      applied for the development of new biomarkers and therapeutics. By
                      generating and making public data that indicates how cells respond to
                      various genetic and environmental stressors, the LINCS project will
                      help us gain a more detailed understanding of cell pathways and aid
                      efforts to develop therapies that might restore perturbed pathways and
                      networks to their normal states. The LINCS website is a source of
                      information for the research community and general public about the
                      LINCS project. The website contains details about the assays, cell
                      types, and perturbagens currently part of the library, as well as links
                      to participating sites, the data releases from the sites, and software
                      that can be used for analyzing the data.
                    </p>
                    <Link to="/centers">Learn More</Link>
                  </div>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.title}>Recent Publications</h3>
                  <div className={styles.publications}>
                    {
                      pubs && pubs.map(p => {
                        let articleTitle = p.articleName;
                        if (p.pmId) {
                          articleTitle = (
                            <a
                              href={`http://www.ncbi.nlm.nih.gov/pubmed/${p.pmId}`}
                              target="_blank"
                            >
                              {p.articleName}
                            </a>
                          );
                        } else if (p.pmcId) {
                          articleTitle = (
                            <a
                              href={`http://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcId}`}
                              target="_blank"
                            >
                              {p.articleName}
                            </a>
                          );
                        } else if (p.doi) {
                          articleTitle = (
                            <a href={`http://dx.doi.org/${p.doi}`} target="_blank">
                              {p.articleName}
                            </a>
                          );
                        } else if (p.otherLink) {
                          articleTitle = (
                            <a href={p.otherLink} target="_blank">{p.articleName}</a>
                          );
                        }
                        const authorNames = p.authors.map(author => author.name);
                        return (
                          <div key={p.id} className={styles.group}>
                            <p>
                              {authorNames.join(', ')}. {p.yearPublished}.
                              <strong> {articleTitle} </strong>
                              {p.journalName}. {p.volume}
                              {!!p.issue ? `(${p.issue})` : ''}
                              {!!p.ppPages ? `:${p.ppPages}` : ''}.
                            </p>
                          </div>
                        );
                      })
                    }
                  </div>
                  <Link to="/publications">More publications...</Link>
                </div>
                <div className={styles.section}>
                  <img
                    src={require('./ncf-osc-logo.png')}
                    className={styles.logo}
                    alt="The NIH Common Fund Office of Strategic Coordination"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  loadPublications: PropTypes.func,
  publications: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadPublications,
})(HomeView);
