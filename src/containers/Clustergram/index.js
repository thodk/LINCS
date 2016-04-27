import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
// import extend from 'extend';

// import renderClustergram from './clustergrammer';
import handleResponse from 'utils/handleResponse';
import styles from './Clustergram.scss';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
  datasets: state.entities.datasets,
  isOpen: state.modals.clustergramModal.isOpen,
  onModalClose: state.modals.clustergramModal.onModalClose,
  datasetId: state.modals.clustergramModal.datasetId,
});

export class Clustergram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkLoaded: false,
      networkError: false,
      clustergramArguments: {
        root: '#clustergram',
        network_data: {},
        row_label: 'Row Title',
        col_label: 'Column Title',
        outer_margins: {
          top: 2,
          bottom: 30,
          left: 5,
          right: 2,
        },
        show_tile_tooltips: true,
        ini_view: { N_row_sum: '500' },
        about: 'Zoom, scroll, and click buttons to interact with the clustergram.',
        row_search_placeholder: 'Gene',
      },
    };
  }

  componentDidMount() {
    this._makeClustergram(this.props.datasetId);
  }

  componentWillReceiveProps(props) {
    this._makeClustergram(props.datasetId);
  }

  _makeClustergram = (datasetId) => {
    if (!datasetId) {
      this.setState({
        networkLoaded: true,
        networkError: true,
      });
      return;
    }
    fetch(`/LINCS/api/v1/datasets/${datasetId}/network`)
      .then(handleResponse)
      .then(response => response.json())
      .then((/* network */) => {
        // const args = {
        //   root: '#clustergram',
        //   network_data: network,
        //   row_label: 'Row Title',
        //   col_label: 'Column Title',
        //   outer_margins: {
        //     top: 2,
        //     bottom: 30,
        //     left: 5,
        //     right: 2,
        //   },
        //   show_tile_tooltips: true,
        //   ini_view: { N_row_sum: '500' },
        //   about: 'Zoom, scroll, and click buttons to interact with the clustergram.',
        //   row_search_placeholder: 'Gene',
        // };
        // window.Clustergrammer(args);
      })
      .catch(() => {
        this.setState({
          networkLoaded: true,
          networkError: true,
        });
      });
  }

  render() {
    const { isOpen, onModalClose, datasets, datasetId } = this.props;
    const ds = datasets[datasetId];
    if (!isOpen || !ds) {
      return null;
    }

    return (
      <Modal
        className="modal-dialog"
        closeTimeoutMS={150}
        isOpen={isOpen}
        onRequestClose={onModalClose}
        style={modalStyles}
      >
        <div className={`modal-content ${styles['modal-content']}`}>
          <div className={`modal-header ${styles['modal-header']}`}>
            <button type="button" className="close" onClick={onModalClose}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h5 className="modal-title">Select a Citation Format</h5>
          </div>
          <div className={`modal-body ${styles['modal-body']}`}>
            <div id="clustergram" />
          </div>
        </div>
      </Modal>
    );
  }
}

Clustergram.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  datasets: PropTypes.object.isRequired,
  datasetId: PropTypes.number,
};

export default connect(mapStateToProps, {})(Clustergram);