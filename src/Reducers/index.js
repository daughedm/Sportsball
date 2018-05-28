import { combineReducers } from 'redux';
import gameSummariesReducer from './gameSummariesReducer/gameSummariesReducer';
// import boxScoresReducer from './boxScoresReducer';
// import singleBoxScoreReducer from './singleBoxScoreReducer';
// import singleGameSummaryReducer from './singleGameSummaryReducer';
// import user from './userReducer';

const rootReducer = combineReducers({
  gameSummaries: gameSummariesReducer
  // boxScores: boxScoresReducer,
  // singleGameSummary: singleGameSummaryReducer,
  // singleBoxScore: singleBoxScoreReducer,
  // user: userReducer
});

export default rootReducer;