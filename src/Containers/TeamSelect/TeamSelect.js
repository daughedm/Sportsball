import React, { Component } from 'react';
import './TeamSelect.css';
import TeamScroll from './../TeamScroll/TeamScroll';

export class TeamSelect extends Component {

  render() {
    return ( 
      <form
        className = "login-form"
        type = "submit"
      >
        <h3 className = "form-header" > Select Your Team </h3> 
           <TeamScroll />
      </form>
    )
  }
}

export default TeamSelect
