import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findGame, teamStatCleaner } from '../../Helpers/dataCleaner'
import { addSelectedTeamToStore } from '../../Actions/userActions';
import './TeamSelect.css';
import { addSingleSummaryToStore, addSingleBoxScoreToStore, addTeamStatsToStore } from '../../Actions';
import {teamStatsFetch} from '../../ApiCall/ApiCall';

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
        onSubmit={this.handleTeamSubmit} 
      >
        <h3 className = "form-header" > Select Your Team </h3> 
           < ul className = "unordered-list dropdown-menu scrollable-menu"
           role = "menu" >
            <li className="list-item" onClick={this.handleTeamClick} id={"Diamondbacks"}>Arizona Diamondbacks</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Braves">Atlanta Braves</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Orioles">Baltimore Orioles</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Red Sox">Boston Red Sox</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Cubs">Chicago Cubs</li>
            <li className="list-item" onClick={this.handleTeamClick} id="White Sox">Chicago White Sox</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Reds">Cincinnati Reds</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Indians">Cleveland Indians</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Rockies">Colorado Rockies</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Tigers">Detroit Tigers</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Astros">Houston Astros</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Royals">Kansas City Royals</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Angels">LA Angels of Anaheim</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Dodgers">Los Angeles Dodgers</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Marlins">Miami Marlins</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Brewers">Milwaukee Brewers</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Twins">Minnesota Twins</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Mets">New York Mets</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Yankees">New York Yankees</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Athletics">Oakland Athletics</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Phillies">Philadelphia Phillies</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Pirates">Pittsburgh Pirates</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Padres">San Diego Padres</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Giants">San Francisco Giants</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Mariners">Seattle Mariners</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Cardinals">St. Louis Cardinals</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Rays">Tampa Bay Rays</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Rangers">Texas Rangers</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Blue Jays">Toronto Blue Jays</li>
            <li className="list-item" onClick={this.handleTeamClick} id="Nationals">Washington Nationals</li>
          </ul>
        <button
          className = "submit-button"
          type = "submit" 
        >
         select team 
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect)
