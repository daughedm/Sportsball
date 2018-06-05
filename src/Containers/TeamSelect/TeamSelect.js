import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findGame, teamStatCleaner } from '../../Helpers/dataCleaner'
import { addSelectedTeamToStore } from '../../Actions/userActions';
import './TeamSelect.css';
import { addSingleSummaryToStore, addSingleBoxScoreToStore, addTeamStatsToStore } from '../../Actions';
import {teamStatsFetch} from '../../ApiCall/ApiCall';
import TeamScroll from './../TeamScroll/TeamScroll';

export class TeamSelect extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      team: ''
    }
  }

  handleTeamClick = (event) => {
    this.setState({
      team: event.target.id
    });
  }

  handleTeamSubmit = async (event) => {
    event.preventDefault();
    const allTeamStats = await teamStatsFetch(this.state.team);
    const teamStats = teamStatCleaner(allTeamStats)
    this.props.handleTeamStats(teamStats);
    const singleBoxScore = findGame(this.state.team, this.props.boxScores);
    const singleSummary = findGame(this.state.team, this.props.gameSummaries);

    this.props.handleTeamSelect(this.state.team);
    this.props.handleBoxScore(singleBoxScore);
    this.props.handleGameSummary(singleSummary);
  }

  render() {
    return ( 
      <form
        className = "login-form"
        type = "submit"
        // onSubmit={this.handleTeamSubmit} 
      >
        <h3 className = "form-header" > Select Your Team </h3> 
           <TeamScroll />
     
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam,
  gameSummaries: state.gameSummaries,
  boxScores: state.boxScores
})

export const mapDispatchToProps = (dispatch) => ({
  handleTeamSelect: (team) =>
    dispatch(addSelectedTeamToStore(team)),
  handleGameSummary: (summary) => 
    dispatch(addSingleSummaryToStore(summary)),
  handleBoxScore: (boxscore) => 
    dispatch(addSingleBoxScoreToStore(boxscore)),
  handleTeamStats: (teamStats) =>
    dispatch(addTeamStatsToStore(teamStats))
});

TeamSelect.propTypes = {

}


const mapAllTheProps = connect(mapStateToProps, mapDispatchToProps);
export default mapAllTheProps(TeamSelect)

// export default teamData(mlbData(userData(TeamSelect)))
