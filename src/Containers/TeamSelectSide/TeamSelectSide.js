import React, { Component } from 'react';
import './TeamSelectSide.css';
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
    );
  }
}

export default TeamSelectSide;
