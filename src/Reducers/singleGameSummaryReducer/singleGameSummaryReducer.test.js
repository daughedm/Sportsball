import { mockCleanSummary } from '../../mockData/mockCleanData';
import singleGameSummaryReducer from './singleGameSummaryReducer';

describe('singleGameSummariesReducer', () => {
  it('returns a state with an single game summary object when called with an ADD_SINGLE_SUMMARY action', () => {
    const initialState = {};
    const addSingleSummaryToStore = {
      type: 'ADD_SINGLE_SUMMARY',
      summary: mockCleanSummary
    };
    let newState = singleGameSummaryReducer(initialState, addSingleSummaryToStore);
    console.log(mockCleanSummary)
    expect(newState).toEqual(addSingleSummaryToStore.summary);
  });

  it('should have an initial state', () => {
    
    let expected = {}
    expect(singleGameSummaryReducer(undefined, {})).toEqual(expected)

  })
});