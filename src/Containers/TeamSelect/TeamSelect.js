import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './TeamSelect.css';

export class TeamSelect extends Component {
  constructor(props) {
    super();
    
    this.state = {
      team: 'select your team'
    }
  }

    handleTeamClick = (event) => {
      this.setState({
        team: event.target.id
      })
    }

  render() {
    return ( 
      <form
        className = "login-form"
        type = "submit"
        onSubmit = "####" 
      >
        <h3 className = "form-header" > Select Your Team </h3> 
           <ul className="dropdown-menu scrollable-menu" role="menu">
            <li onClick={this.handleTeamClick} id={"Diamondbacks"}>Arizona Diamondbacks</li>
            <li onClick={this.handleTeamClick} id="Braves">Atlanta Braves</li>
            <li onClick={this.handleTeamClick} id="Orioles">Baltimore Orioles</li>
            <li onClick={this.handleTeamClick} id="Red Sox">Boston Red Sox</li>
            <li onClick={this.handleTeamClick} id="Cubs">Chicago Cubs</li>
            <li onClick={this.handleTeamClick} id="White Sox">Chicago White Sox</li>
            <li onClick={this.handleTeamClick} id="Reds">Cincinnati Reds</li>
            <li onClick={this.handleTeamClick} id="Indians">Cleveland Indians</li>
            <li onClick={this.handleTeamClick} id="Rockies">Colorado Rockies</li>
            <li onClick={this.handleTeamClick} id="Tigers">Detroit Tigers</li>
            <li onClick={this.handleTeamClick} id="Astros">Houston Astros</li>
            <li onClick={this.handleTeamClick} id="Royals">Kansas City Royals</li>
            <li onClick={this.handleTeamClick} id="Angels">LA Angels of Anaheim</li>
            <li onClick={this.handleTeamClick} id="Dodgers">Los Angeles Dodgers</li>
            <li onClick={this.handleTeamClick} id="Marlins">Miami Marlins</li>
            <li onClick={this.handleTeamClick} id="Brewers">Milwaukee Brewers</li>
            <li onClick={this.handleTeamClick} id="Twins">Minnesota Twins</li>
            <li onClick={this.handleTeamClick} id="Mets">New York Mets</li>
            <li onClick={this.handleTeamClick} id="Yankees">New York Yankees</li>
            <li onClick={this.handleTeamClick} id="Athletics">Oakland Athletics</li>
            <li onClick={this.handleTeamClick} id="Phillies">Philadelphia Phillies</li>
            <li onClick={this.handleTeamClick} id="Pirates">Pittsburgh Pirates</li>
            <li onClick={this.handleTeamClick} id="Padres">San Diego Padres</li>
            <li onClick={this.handleTeamClick} id="Giants">San Francisco Giants</li>
            <li onClick={this.handleTeamClick} id="Mariners">Seattle Mariners</li>
            <li onClick={this.handleTeamClick} id="Cardinals">St. Louis Cardinals</li>
            <li onClick={this.handleTeamClick} id="Rays">Tampa Bay Rays</li>
            <li onClick={this.handleTeamClick} id="Rangers">Texas Rangers</li>
            <li onClick={this.handleTeamClick} id="Blue Jays">Toronto Blue Jays</li>
            <li onClick={this.handleTeamClick} id="Nationals">Washington Nationals</li>
          </ul>
        
        
        <button
          className = "submit-button"
          type = "submit" >
         select team 
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

TeamSelect.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect)
