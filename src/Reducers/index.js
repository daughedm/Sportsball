import { combineReducers } from 'redux';
import gameSummariesReducer from './gameSummariesReducer/gameSummariesReducer';
import boxScoresReducer from './boxScoresReducer/boxScoresReducer';
import selectedTeamReducer from './selctedTeamReducer/selectedTeamReducer';
import singleBoxScoreReducer from './singleBoxScoreReducer/singleBoxScoreReducer';
import singleGameSummaryReducer from './singleGameSummaryReducer/singleGameSummaryReducer';
// import user from './userReducer';

const rootReducer = combineReducers({
  gameSummaries: gameSummariesReducer,
  boxScores: boxScoresReducer,
  selectedTeam: selectedTeamReducer,
  singleGameSummary: singleGameSummaryReducer,
  singleBoxScore: singleBoxScoreReducer,
  // user: userReducer
});

export default rootReducer;