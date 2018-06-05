import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findGame, teamStatCleaner } from '../../Helpers/dataCleaner'
import { addSelectedTeamToStore } from '../../Actions/userActions';
import './TeamSelectSide.css';
import { addSingleSummaryToStore, addSingleBoxScoreToStore, addTeamStatsToStore } from '../../Actions';
import { teamStatsFetch } from '../../ApiCall/ApiCall';
import TeamScroll from './../TeamScroll/TeamScroll';

export class TeamSelectSide extends Component {

  render() {
    return ( 
      <form
        className = "side-form"
        type = "submit"
      >
        <h3 className = "form-header" > Switch Teams </h3> 
          <TeamScroll />
      </form>
    )
  }
}

TeamSelectSide.propTypes = {

}

export default TeamSelectSide
