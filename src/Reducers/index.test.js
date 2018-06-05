import { createStore } from 'redux';
import rootReducer from './index';
import boxScoreReducer from './boxScoresReducer/boxScoresReducer';
import gameSummariesReducer from './gameSummariesReducer/gameSummariesReducer';
import selectedTeamReducer from './selctedTeamReducer/selectedTeamReducer';
import singleBoxScoreReducer from './singleBoxScoreReducer/singleBoxScoreReducer';
import singleGameSummaryReducer from './singleGameSummaryReducer/singleGameSummaryReducer';
import teamStatsReducer from './teamStatsReducer/teamStatsReducer';



const store = createStore(rootReducer);

describe('rootReducer', () => {
  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().gameSummaries).toEqual(gameSummariesReducer([], {}));
  });

  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().boxScores).toEqual(boxScoreReducer([], {}));
  });

  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().selectedTeam).toEqual(selectedTeamReducer('', {}));
  });

  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().singleGameSummary).toEqual(singleGameSummaryReducer({}, {}));
  });

  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().singleBoxScore).toEqual(singleBoxScoreReducer({}, {}));
  });

  it('reducer should match the default state given an empty action', () => {
    expect(store.getState().teamStats).toEqual(teamStatsReducer({}, {}));
  });
} );
