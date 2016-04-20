import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import styles from './CitationsModal.scss';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '0px',
    background: 'none',
    overflow: 'inherit',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0px',
  },
};

const mapStateToProps = (state) => ({
  isOpen: state.modals.citationsModal.isOpen,
  onModalClose: state.modals.citationsModal.onModalClose,
  datasetId: state.modals.citationsModal.datasetId,
  pubId: state.modals.citationsModal.pubId,
});

export class CitationsModal extends Component {
  render() {
    const { isOpen, onModalClose, datasetId, pubId } = this.props;
    let risLink = '';
    let enwLink = '';
    let bibLink = '';
    if (datasetId) {
      risLink = `/LINCS/api/v1/datasets/${datasetId}/reference/ris`;
      enwLink = `/LINCS/api/v1/datasets/${datasetId}/reference/enw`;
      bibLink = `/LINCS/api/v1/datasets/${datasetId}/reference/bib`;
    } else if (pubId) {
      risLink = `/LINCS/api/v1/publications/${pubId}/reference/ris`;
      enwLink = `/LINCS/api/v1/publications/${pubId}/reference/enw`;
      bibLink = `/LINCS/api/v1/publications/${pubId}/reference/bib`;
    }
    return (
      <Modal
        className="modal-dialog"
        closeTimeoutMS={150}
        isOpen={isOpen}
        onRequestClose={onModalClose}
        style={modalStyles}
      >
        <div className="modal-content">
          <div className={`modal-header ${styles['modal-header']}`}>
            <button type="button" className="close" onClick={onModalClose}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h5 className="modal-title">Select a Citation Format</h5>
          </div>
          <div className={`modal-body ${styles['modal-body']}`}>
            <a href={risLink} className={`btn btn-secondary ${styles['citation-link']}`}>
              <img src={require('./ris.png')} alt="Research Information Systems" />
              <h5 className="text-xs-center">.ris</h5>
            </a>
            <a href={enwLink} className={`btn btn-secondary ${styles['citation-link']}`}>
              <img src={require('./endnote.png')} alt="Endnote" />
              <h5 className="text-xs-center">.enw</h5>
            </a>
            <a href={bibLink} className={`btn btn-secondary ${styles['citation-link']}`}>
              <img src={require('./BibTeX.svg')} alt="BibTeX" />
              <h5 className="text-xs-center">.bib</h5>
            </a>
          </div>
        </div>
      </Modal>
    );
  }
}

CitationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func,
  datasetId: PropTypes.number,
  pubId: PropTypes.number,
};

export default connect(mapStateToProps, {})(CitationsModal);