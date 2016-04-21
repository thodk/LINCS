import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { openCitationsModal, closeCitationsModal } from 'actions/modals';
import styles from './PublicationsView.scss';

export default class Publication extends Component {
  _openCitationsModal = () => {
    this.props.openCitationsModal({
      pubId: this.props.pub.id,
      onModalClose: this.props.closeCitationsModal,
    });
  }

  _handleADClicked = () => this.props.onCatClicked('assayDevelopment');
  _handleDAClicked = () => this.props.onCatClicked('dataAnalysis');
  _handleDGClicked = () => this.props.onCatClicked('dataGeneration');
  _handleDIClicked = () => this.props.onCatClicked('dataIntegration');
  _handleDSClicked = () => this.props.onCatClicked('dataStandards');
  _handleSGClicked = () => this.props.onCatClicked('signatureGeneration');
  _handleSDClicked = () => this.props.onCatClicked('softwareDevelopment');
  _handleRClicked = () => this.props.onCatClicked('review');

  render() {
    const p = this.props.pub;
    const authorNames = p.authors.map(author => author.name);
    let articleTitle = p.articleName;
    if (p.pmId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pubmed/${p.pmId}`} target="_blank">
          {p.articleName}
        </a>
      );
    } else if (p.pmcId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcId}`} target="_blank">
          {p.articleName}
        </a>
      );
    } else if (p.doi) {
      articleTitle = (
        <a href={`http://dx.doi.org/${p.doi}`} target="_blank">{p.articleName}</a>
      );
    } else if (p.otherLink) {
      articleTitle = (
        <a href={p.otherLink} target="_blank">{p.articleName}</a>
      );
    }
    return (
      <div key={p.id} className={styles.pub}>
        <p>
          {authorNames.join(', ')}. {p.yearPublished}.
          <strong> {articleTitle} </strong>
          {p.journalName}. {p.volume}
          {!!p.issue ? `(${p.issue})` : ''}
          {!!p.ppPages ? `:${p.ppPages}` : ''}.
        </p>
        <p>
          {
            p.assayDevelopment &&
            <span
              onClick={this._handleADClicked}
              className={`${styles.cat} ${styles['cat-ad']}`}
            >
              Assay Development
            </span>
          }
          {
            p.dataAnalysis &&
            <span
              onClick={this._handleDAClicked}
              className={`${styles.cat} ${styles['cat-da']}`}
            >
              Data Analysis
            </span>
          }
          {
            p.dataGeneration &&
            <span
              onClick={this._handleDGClicked}
              className={`${styles.cat} ${styles['cat-dg']}`}
            >
              Data Generation
            </span>
          }
          {
            p.dataIntegration &&
            <span
              onClick={this._handleDIClicked}
              className={`${styles.cat} ${styles['cat-di']}`}
            >
              Data Integration
            </span>
          }
          {
            p.dataStandards &&
            <span
              onClick={this._handleDSClicked}
              className={`${styles.cat} ${styles['cat-ds']}`}
            >
              Data Standards
            </span>
          }
          {
            p.signatureGeneration &&
            <span
              onClick={this._handleSGClicked}
              className={`${styles.cat} ${styles['cat-sg']}`}
            >
              Signature Generation
            </span>
          }
          {
            p.softwareDevelopment &&
            <span
              onClick={this._handleSDClicked}
              className={`${styles.cat} ${styles['cat-sd']}`}
            >
              Software Development
            </span>
          }
          {
            p.review &&
            <span
              onClick={this._handleRClicked}
              className={`${styles.cat} ${styles['cat-review']}`}
            >
              Review
            </span>
          }
          <span
            onClick={this._openCitationsModal}
            className={`${styles.cat} ${styles['cat-cite']}`}
          >
            Export citation
          </span>
        </p>
      </div>
    );
  }
}

Publication.propTypes = {
  pub: PropTypes.object,
  onCatClicked: PropTypes.func,
  openCitationsModal: PropTypes.func,
  closeCitationsModal: PropTypes.func,
};

export default connect(null, {
  openCitationsModal,
  closeCitationsModal,
})(Publication);
