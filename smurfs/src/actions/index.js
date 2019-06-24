import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => async dispatch => {
  try {
    dispatch({ type: FETCHING });
    const res = await fetch(URL);
    const data = await res.json();
    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};

export const addSmurf = newSmurf => dispatch => {
  axios
    .post(URL, newSmurf)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};
