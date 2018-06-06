import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import { connect } from 'react-redux';
import { yesterdaysDate } from '../../Helpers/dataCleaner';
import { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint } from '../../Helpers/talkingPointLogic';
import TeamSelectSide from '../TeamSelectSide/TeamSelectSide';
import logo from '../../Assets/images/logo_creme-02.svg';

export const Main = (props) => {
  const date = yesterdaysDate();
  const thirdPhrase = thirdTalkingPoint(props.selectedTeam, props.teamStats);
  const secondPhrase = secondTalkingPoint(props.selectedTeam, props.singleBoxScore);
  const firstPhrase = firstTalkingPoint(props.selectedTeam, props.singleGameSummary);
  
  return (
    <div className="container">
      < div className = "left-container animated fadeIn" >
        < img className = "sportsball-logo-side"
          src = {
            logo
          }
          alt = "logo"
        />
        <h2 className = "team-selected" > {
          props.selectedTeam
        } </h2>
        <TeamSelectSide />
      </div>
      <div className="orange-container animated fadeIn">
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
  );
};

Main.propTypes = {
  selectedTeam: PropTypes.string,
  singleGameSummary: PropTypes.any,
  singleBoxScore: PropTypes.any,
  teamStats: PropTypes.any,
};

export const mapStateToProps = (state) => ({
  selectedTeam: state.selectedTeam,
  singleGameSummary: state.singleGameSummary,
  singleBoxScore: state.singleBoxScore,
  teamStats: state.teamStats
});

export default connect(mapStateToProps, null)(Main);