import React, {Component} from 'react'
import mlbTeams from './../../Helpers/mlbTeams';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findGame, teamStatCleaner } from '../../Helpers/dataCleaner'
import { addSelectedTeamToStore } from '../../Actions/userActions';
import { addSingleSummaryToStore, addSingleBoxScoreToStore, addTeamStatsToStore } from '../../Actions';
import { teamStatsFetch } from '../../ApiCall/ApiCall';


class TeamScroll extends Component {
  constructor() {
    super();
    this.state = {
      teamClicked: ''
    };
  }

  handleTeamClick = (event) => {
    this.setState({
      teamClicked: event.target.id
    })
  }

  handleTeamSubmit = async (event) => {
    event.preventDefault();
    const allTeamStats = await teamStatsFetch(this.state.teamClicked);
    const teamStats = teamStatCleaner(allTeamStats)
    this.props.handleTeamStats(teamStats);
    const singleBoxScore = findGame(this.state.teamClicked, this.props.boxScores);
    const singleSummary = findGame(this.state.teamClicked, this.props.gameSummaries);

    this.props.handleTeamSelect(this.state.teamClicked);
    this.props.handleBoxScore(singleBoxScore);
    this.props.handleGameSummary(singleSummary);
  }

  render() {
    const teamList = mlbTeams.map(team => {
      const toggleClass = this.state.teamClicked === team.id ?  "selected-team" :  ''; 
      
      return (
        <li 
          className={`${toggleClass} list-item`} 
          onClick={ this.handleTeamClick } 
          id={team.id}
          key={team.id}
        > 
          {team.teamName}
          
        </li>)
    })
    return(
        <div>
          <ul 
            className="unordered-list dropdown-menu scrollable-menu"
            role="menu">
            {teamList}
          </ul>
        <button
          onClick={this.handleTeamSubmit} 
          className="submit-button"
          type="submit"
        >
          select team
        </button>
        </div>
    )

  }  
}

export const mapDispatchToProps = (dispatch) => ({
  handleTeamSelect: (teamClicked) =>
    dispatch(addSelectedTeamToStore(teamClicked)),
  handleGameSummary: (summary) =>
    dispatch(addSingleSummaryToStore(summary)),
  handleBoxScore: (boxscore) =>
    dispatch(addSingleBoxScoreToStore(boxscore)),
  handleTeamStats: (teamStats) =>
    dispatch(addTeamStatsToStore(teamStats))
});

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam,
  gameSummaries: state.gameSummaries,
  boxScores: state.boxScores
})

TeamScroll.propTypes = {
  gameSummaries: PropTypes.array,
  boxScores: PropTypes.array,
  selectedTeam: PropTypes.string,
  handleBoxScore: PropTypes.func,
  handleTeamStats: PropTypes.func,
  handleGameSummary: PropTypes.func,
  handleTeamSelect: PropTypes.func,

}

export default connect(mapStateToProps, mapDispatchToProps)(TeamScroll)
