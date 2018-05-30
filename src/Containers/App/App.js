import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FormContainer from '../FormContainer/FormContainer';
import Main from '../Main/Main';
import { gameSummariesFetch, boxScoresFetch } from '../../ApiCall/ApiCall';
import { gameSummaryCleaner, boxScoresCleaner } from '../../Helpers/dataCleaner';
import { addSummariesToStore, addBoxScoresToStore } from '../../Actions/mlbDataActions';

export class App extends Component {
  
  componentDidMount() {
    this.getData()
  }

  async getSummaries() {
    const fullSummaries = await gameSummariesFetch();
    const cleanedSummaries = gameSummaryCleaner(fullSummaries);
    this.props.handleSummaries(cleanedSummaries);
  }

  async getBoxScores() {
    const fullBoxScores = await boxScoresFetch();
    const cleanedBoxScores = boxScoresCleaner(fullBoxScores);
    this.props.handleBoxScores(cleanedBoxScores);
  }

  getData() {
    this.getSummaries();
    this.getBoxScores();
  }

  render() { 
    const teamSelected = this.props.selectedTeam;
    
    const teamSelectOrMain = teamSelected.value ? (
      <FormContainer />
    ) : (
      <Main />
    );
    
    return (
      < Router >
        { teamSelectOrMain }
      </Router>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleSummaries: (summaries) => 
    dispatch(addSummariesToStore(summaries)),
  handleBoxScores: (boxScores) =>
    dispatch(addBoxScoresToStore(boxScores))
});

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
