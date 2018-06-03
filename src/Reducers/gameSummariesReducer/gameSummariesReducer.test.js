import { mockCleanSummary } from '../../mockData/mockCleanData';
import gameSummariesReducer from './gameSummariesReducer';

describe('gameSummariesReducer', () => {
  it('returns a state with an array of films when called with an ADD_SUMMARIES action', () => {
    const initialState = {};
    const addSummariesToStore = {
      type: 'ADD_SUMMARIES',
      summaries: mockCleanSummary
    };
    let newState = gameSummariesReducer(initialState, addSummariesToStore);

    expect(newState).toEqual(addSummariesToStore.summaries);
  });
});