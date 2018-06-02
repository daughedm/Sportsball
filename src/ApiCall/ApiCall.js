import apiKey from './apiKey';
import { yesterdaysDate } from '../Helpers/dataCleaner';
import { AssertionError } from 'assert';
import { teamEndPoints } from './teamEndPoints';

const gameSummariesFetch = async () => {
  const date = yesterdaysDate();
  const url = `http://api.sportradar.us/mlb/trial/v6.5/en/games/${date}/summary.json?api_key=${apiKey}`;
  
  try{
    const response = await fetch(url);
    const mlbSummary = await response.json();
    return mlbSummary;
  } catch (err) {
    const error = 'Error on the catcher, could\'nt catch the data.';
    throw error;
  }
};

const boxScoresFetch = async () => {
  const date = yesterdaysDate();
  const url = `http://api.sportradar.us/mlb/trial/v6.5/en/games/${date}/boxscore.json?api_key=${apiKey}`;
  
  try{  
    const response = await fetch(url);
    const mlbBoxScores = await response.json();
    return mlbBoxScores;
  } catch (err) {
    const error = 'Error on the catcher, could\'nt catch the data.';
    throw error;
  }
};  

const teamStatsFetch = async (team) => {
  const teamId = teamEndPoints(team);
  const year = currentTime.getFullYear()

}

export { gameSummariesFetch, boxScoresFetch }


`http://api.sportradar.us/mlb/trial/v6.5/en/seasons/${year}/REG/teams/${teamId}/statistics.json?api_key=${apiKey}`