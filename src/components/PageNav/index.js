import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './PageNav.scss';

const centersRoute = '/centers';
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;

export default class PageNav extends Component {
  get navItems() {
    return [
      {
        title: 'Overview',
        route: `${centersRoute}/overview`,
        children: [],
      },
      {
        title: 'BD2K-LINCS Data Coordination and Integration Center',
        route: `${centersRoute}/dcic`,
        children: [],
      },
      {
        title: 'Data and Signature Generation Centers',
        route: dsgcRoute,
        children: [
          { title: 'Introduction', route: dsgcRoute },
          { title: 'Drug Toxicity Signature Generation Center', route: `${dsgcRoute}/dtoxs` },
          { title: 'HMS LINCS', route: `${dsgcRoute}/hms-lincs` },
          {
            title: 'LINCS Center for Transcriptomics',
            route: `${dsgcRoute}/lincs-transcriptomics`,
          },
          {
            title: 'LINCS Proteomic Characterization Center for Signaling and Epigenetics',
            route: `${dsgcRoute}/lincs-pccse`,
          },
          {
            title: 'Microenvironment Perturbagen (MEP) LINCS Center',
            route: `${dsgcRoute}/mep-lincs`,
          },
          { title: 'NeuroLINCS Center', route: `${dsgcRoute}/neurolincs` },
        ],
      },
      {
        title: 'Pilot Phase 1 Centers',
        route: `${centersRoute}/phase-one`,
        children: [],
      },
    ];
  }
  render() {
    const { mainPage, subPage } = this.props;
    return (
      <div className={`col-md-3 col-md-push-9 ${styles.wrapper}`}>
        <div className={styles.wrapper}>
          <nav>
            {
              this.navItems.map((navObj, index) => {
                let navClasses = styles['nav-item'];
                if (navObj.title === mainPage) {
                  navClasses = `${styles['nav-item']} ${styles.active}`;
                }
                return (
                  <div key={index} className={navClasses}>
                    <Link className={styles.link} to={navObj.route}>{navObj.title}</Link>
                    {
                      !!navObj.children.length &&
                      (
                        <ul className={`nav ${styles['inner-nav']}`}>
                          {
                            navObj.children.map((navChild, i) =>
                              <li
                                key={i}
                                className={navChild.title === subPage ? styles['inner-active'] : ''}
                              >
                                <Link
                                  className={styles['inner-link']}
                                  to={navChild.route}
                                >
                                  {navChild.title}
                                </Link>
                              </li>
                            )
                          }
                        </ul>
                      )
                    }
                  </div>
                );
              })
            }
          </nav>
        </div>
      </div>
    );
  }
}

PageNav.propTypes = {
  mainPage: PropTypes.string.isRequired,
  subPage: PropTypes.string,
};
