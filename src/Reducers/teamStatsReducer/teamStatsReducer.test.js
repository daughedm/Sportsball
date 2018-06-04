import teamStatsReducer from './teamStatsReducer';

describe('teamStatsReducer', () => {
  it('returns a object ADD_TEAM_STATS', () => {
    const mockData = {Indians: {stats: 300}}
    const initialState = {};
    const addTeamStatsToStore = {
      type: 'ADD_TEAM_STATS',
      teamStats: mockData
    };
    let newState = teamStatsReducer(initialState, addTeamStatsToStore);
    expect(newState).toEqual(addTeamStatsToStore.teamStats);
  });

  it('should have an initial state', () => {
    
    let expected = {}
    expect(teamStatsReducer(undefined, {})).toEqual(expected)

  })
});