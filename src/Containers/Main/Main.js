import React from 'react'
import './Main.css';
import { connect } from 'react-redux';
import { yesterdaysDate } from '../../Helpers/dataCleaner';
import { winningMessages, losingMessages } from '../../Helpers/talkingPointPhrases';
import { firstTalkingPoint } from '../../Helpers/talkingPointLogic';
import logo from '../../Assets/images/logo_creme.svg';

const Main = (props) => {
  const date = yesterdaysDate();
  const firstPhrase = firstTalkingPoint(props.selectedTeam, props.singleGameSummary)
  
  return (
    <div className="container">
      <div className="left-container">
        <img className="sportsball-logo-side" src={logo}/>
      </div>
      <div className="orange-container">
        <h3 className="talking-point" >YOUR DAILY TALKING POINTS <span className="light"> | </span>   {date} 
        </h3>
        < div className="talking-points-container" >
          <ul className="u-list">
            <li className="point border-bottom">{ firstPhrase }</li>
            <li className="point border-bottom">That double that scored one in the third was clutch!</li>
            <li className="point">Lindor is having a fantastic year, hitting .345</li>     
          </ul>
        </div>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam,
  singleGameSummary: state.singleGameSummary,
  singleBoxScore: state.singleBoxScore
})

export default connect(mapStateToProps, null)(Main)