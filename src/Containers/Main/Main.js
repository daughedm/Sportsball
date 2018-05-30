import React from 'react'
import './Main.css';
import { yesterdaysDate } from '../../Helpers/dataCleaner';
import { winningMessages, losingMessages } from '../../Helpers/talkingPointPhrases';

const Main = (props) => {
  const date = yesterdaysDate();
  return (
    <div className="orange-container">
      <h3 className="talking-point" >YOUR DAILY TALKING POINTS <span className="light"> | </span>   {date} 
      </h3>
      < div className="talking-points-container" >
        <ul className="u-list">
          <li className="point border-bottom">Wow, that game was sick! I can’t believe the Indians won 4-1!</li>
          <li className="point border-bottom">That double that scored one in the third was clutch!</li>
          <li className="point border-bottom">Lindor is having a fantastic year, hitting .345</li>     
          <li className="point border-bottom">Lindor is having a fantastic year, hitting .345</li>      
        </ul>
      </div>
    </div>
  )
}

export default Main;