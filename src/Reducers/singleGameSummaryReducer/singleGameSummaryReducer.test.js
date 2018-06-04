import { mockCleanSummary } from '../../mockData/mockCleanData';
import singleGameSummaryReducer from './singleGameSummaryReducer';

describe('singleGameSummariesReducer', () => {
  it('returns a state with an array of films when called with an ADD_SUMMARIES action', () => {
    const initialState = {};
    const addSingleSummaryToStore = {
      type: 'ADD_SINGLE_SUMMARY',
      summary: mockCleanSummary
    };
    let newState = singleGameSummaryReducer(initialState, addSingleSummaryToStore);

    expect(newState).toEqual(addSingleSummaryToStore.summaries);
  });

  it('should have an initial state', () => {
    
    let expected = {}
    expect(singleGameSummaryReducer(undefined, {})).toEqual(expected)

  })
});