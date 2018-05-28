import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login/Login'
import FormContainer from '../FormContainer/FormContainer';
import Main from '../Main/Main';
import { gameSummariesFetch, boxScoresFetch } from '../../ApiCall/ApiCall';
import {gameSummaryCleaner, findGame} from '../../Helpers/dataCleaner';
import {addSummariesToStore} from '../../Actions/mlbDataActions';

export class App extends Component {
  
  componentDidMount() {
    this.getSummaries();
  }

  async getSummaries() {
    const fullSummaries = await gameSummariesFetch();
    const cleanedSummaries = gameSummaryCleaner(fullSummaries);
    this.props.handleSummaries(cleanedSummaries);
  }

  render() { 
    return (
      < Router >
        < FormContainer />
      </Router>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleSummaries: (summaries) => 
  dispatch(addSummariesToStore(summaries))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
