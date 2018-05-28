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
        team: event.target.value
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
            <li><a href="#">Arizona Diamondbacks</a></li>
            <li><a href="#">Atlanta Braves</a></li>
            <li><a href="#">Baltimore Orioles</a></li>
            <li><a href="#">Boston Red Sox</a></li>
            <li><a href="#">Chicago Cubs</a></li>
            <li><a href="#">Chicago White Sox</a></li>
            <li><a href="#">Cincinnati Reds</a></li>
            <li><a href="#">Cleveland Indians</a></li>
            <li><a href="#">Colorado Rockies</a></li>
            <li><a href="#">Detroit Tigers</a></li>
            <li><a href="#">Houston Astros</a></li>
            <li><a href="#">Kansas City Royals</a></li>
            <li><a href="#">LA Angels of Anaheim</a></li>
            <li><a href="#">Los Angeles Dodgers</a></li>
            <li><a href="#">Miami Marlins</a></li>
            <li><a href="#">Milwaukee Brewers</a></li>
            <li><a href="#">Minnesota Twins</a></li>
            <li><a href="#">New York Mets</a></li>
            <li><a href="#">New York Yankees</a></li>
            <li><a href="#">Oakland Athletics</a></li>
            <li><a href="#">Philadelphia Phillies</a></li>
            <li><a href="#">Pittsburgh Pirates</a></li>
            <li><a href="#">San Diego Padres</a></li>
            <li><a href="#">San Francisco Giants</a></li>
            <li><a href="#">Seattle Mariners</a></li>
            <li><a href="#">St. Louis Cardinals</a></li>
            <li><a href="#">Tampa Bay Rays</a></li>
            <li><a href="#">Texas Rangers</a></li>
            <li><a href="#">Toronto Blue Jays</a></li>
            <li><a href="#">Washington Nationals</a></li>
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
