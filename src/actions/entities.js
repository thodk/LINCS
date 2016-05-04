// This file is used to fetch datasets and increment their clicks. It makes
// use of the redux api middleware (middleware/api.js). That code as well as
// the action creators in this file are very similar to the ones in the
// redux real-world example:
// https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md#real-world

import { CALL_API, Schemas } from 'middleware/api';

// Dataset action types
export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

// Increment dataset clicks action types
export const INCREMENT_DATASET_CLICKS_REQUEST = 'INCREMENT_DATASET_CLICKS_REQUEST';
export const INCREMENT_DATASET_CLICKS_SUCCESS = 'INCREMENT_DATASET_CLICKS_SUCCESS';
export const INCREMENT_DATASET_CLICKS_FAILURE = 'INCREMENT_DATASET_CLICKS_FAILURE';

/**
 * This redux action creator load the datasets from the server with the
 * specified relationships.
 *
 * @param {Array} include The relationships that you would like to include
 * from the database. For example, ['center'] will return the dataset object
 * with a 'center' key that contains the information about the center who
 * created the dataset.
 * @return {Function} A function that returns a dispatch()
 */
export function loadDatasets(include = ['center', 'cells', 'cells.tissues', 'cells.diseases']) {
  // TODO: Improve check to see if loaded.
  return (dispatch, getState) => {
    const state = getState();
    const { datasets } = state.entities;
    const { datasetsPending } = state.pendingRequests;

    // Check if there are datasets in the state.entities.datasets object or
    // that a request for the datasets is already pending. If either is true,
    // a request to the server is not needed.
    if ((datasets && Object.keys(datasets).length) || datasetsPending) {
      return null;
    }

    // Create the endpoint. This will be appended to the baseUrl.
    // An example is /datasets?include=center,cells
    let endpoint = 'datasets';
    if (include.length) {
      endpoint += `?include=${include.join(',')}`;
    }

    // This action takes a REQUEST, SUCCESS, and FAILURE action type to be dispatched
    // in a similar fashion to the other action creators (loadTools(), loadPublications()).
    // The schema is also specified. This is used for normalizr: https://github.com/gaearon/normalizr
    return dispatch({
      [CALL_API]: {
        types: [DATASETS_REQUEST, DATASETS_SUCCESS, DATASETS_FAILURE],
        endpoint,
        schema: Schemas.DATASET_ARRAY,
      },
    });
  };
}

/**
 * This redux action creator increments the clicks count for each
 * dataset specified.
 *
 * @param {Array} datasetIds The ids of the datasets whose clicks will be
 * incremented.
 * @return {Function} A function that returns a dispatch()
 */
export function incrementDatasetClicks(datasetIds = []) {
  return (dispatch) => {
    // Only update dataset clicks when in production.
    // Prevents running up stats during development.
    if (!datasetIds.length || process.env.NODE_ENV !== 'production') {
      return null;
    }
    // This action takes a REQUEST, SUCCESS, and FAILURE action type to be dispatched
    // in a similar fashion to the other action creators (loadTools(), loadPublications()).
    // The schema is also specified. This is used for normalizr: https://github.com/gaearon/normalizr
    // The dataset ids are passed so that they can be sent in the post request.
    return dispatch({
      [CALL_API]: {
        types: [
          INCREMENT_DATASET_CLICKS_REQUEST,
          INCREMENT_DATASET_CLICKS_SUCCESS,
          INCREMENT_DATASET_CLICKS_FAILURE,
        ],
        endpoint: 'datasets/clicks/increment',
        schema: Schemas.DATASET_ARRAY,
        body: { datasetIds },
      },
    });
  };
}
