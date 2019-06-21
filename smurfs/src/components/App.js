import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SmurfForm from '../components/SmurfForm';
import Smurfs from '../components/Smurfs';
import GlobalStyle from './GlobalStyle';

const App = props => {
  return (
    <Fragment>
      <GlobalStyle />
      <SmurfForm />
      <Smurfs smurfs={props.smurfs} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  {}
)(App);
