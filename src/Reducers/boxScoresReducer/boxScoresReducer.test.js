import { mockCleanBoxScores } from '../../mockData/mockCleanData';
import boxScoreReducer from './boxScoresReducer';

describe('boxScoreReducer', () => {
  it('returns a state with an object of box scores when called with an ADD_BOXSCORES action', () => {
    const initialState = {};
    const addBoxscoreToStore = {
      type: 'ADD_BOXSCORES',
      boxScores: mockCleanBoxScores
    };
    let newState = boxScoreReducer(initialState, addBoxscoreToStore);

    expect(newState).toEqual(addBoxscoreToStore.boxScores);
  });

  it('should have an initial state', () => {

    let expected = [];
    expect(boxScoreReducer(undefined, {})).toEqual(expected);

  });
});