import React from 'react'
import './Main.css';
import { connect } from 'react-redux';
import { yesterdaysDate } from '../../Helpers/dataCleaner';
import { winningMessages, losingMessages } from '../../Helpers/talkingPointPhrases';
import { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint } from '../../Helpers/talkingPointLogic';
import TeamSelectSide from '../TeamSelectSide/TeamSelectSide';
import logo from '../../Assets/images/logo_creme.svg';

export const Main = (props) => {
  const date = yesterdaysDate();
  const thirdPhrase = thirdTalkingPoint(props.selectedTeam, props.teamStats);
  const secondPhrase = secondTalkingPoint(props.selectedTeam, props.singleBoxScore);
  const firstPhrase = firstTalkingPoint(props.selectedTeam, props.singleGameSummary);
  
  return (
    <div className="container">
      <div className="left-container">
        <img className="sportsball-logo-side" src={logo}/>
        <h2 className="team-selected">{props.selectedTeam}</h2>
        <TeamSelectSide />
      </div>
      <div className="orange-container">
        <h3 className="talking-point" >YOUR DAILY TALKING POINTS <span className="light"> | </span>   {date} 
        </h3>
        < div className="talking-points-container" >
          <ul className="u-list">
            <li className="point border-bottom">{ firstPhrase }</li>
            <li className="point border-bottom">{ secondPhrase }</li>
            <li className="point">{ thirdPhrase }</li>     
          </ul>
        </div>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam,
  singleGameSummary: state.singleGameSummary,
  singleBoxScore: state.singleBoxScore,
  teamStats: state.teamStats
})

export default connect(mapStateToProps, null)(Main)