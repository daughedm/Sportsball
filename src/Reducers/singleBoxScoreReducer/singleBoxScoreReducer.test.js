import { mockCleanBoxScores } from '../../mockData/mockCleanData';
import singleBoxScoreReducer from './singleBoxScoreReducer';

describe('singleBoxScoreReducer', () => {
  it('returns a state with an object of box scores when called with an ADD_SINGLE_BOXSCORE action', () => {
    const initialState = {};
    const addSingleBoxscoreToStore = {
      type: 'ADD_SINGLE_BOXSCORE',
      boxScore: mockCleanBoxScores
    };
    let newState = singleBoxScoreReducer(initialState, addSingleBoxscoreToStore);

    expect(newState).toEqual(addSingleBoxscoreToStore.boxScore);
  });

  it('should have an initial state', () => {

    let expected = {}
    expect(singleBoxScoreReducer(undefined, {})).toEqual(expected)

  })
});