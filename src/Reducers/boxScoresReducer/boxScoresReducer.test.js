import { mockCleanBoxScores } from '../../mockData/mockCleanData';
import boxScoreReducer from './boxScoresReducer';

describe('boxScoreReducer', () => {
  it('returns a state with an array of films when called with an ADD_BOXSCORES action', () => {
    const initialState = {};
    const addBoxscoreToStore = {
      type: 'ADD_BOXSCORES',
      boxScores: mockCleanBoxScores
    };
    let newState = boxScoreReducer(initialState, addBoxscoreToStore);

    expect(newState).toEqual(addBoxscoreToStore.boxScores);
  });
});