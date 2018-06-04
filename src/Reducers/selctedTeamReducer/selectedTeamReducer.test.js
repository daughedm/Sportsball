import selectedTeamReducer from './selectedTeamReducer';

describe('selectedTeamReducer', () => {
  let mockSelectedTeam;
  beforeEach(() => {
    mockSelectedTeam = 'Indians';
  })
  
  it('returns a state with a string with ADD_SELECTED_TEAM action', () => {
    const initialState = '';
    const addSelectedTeamToStore = {
      type: 'ADD_SELECTED_TEAM',
      team: mockSelectedTeam
    };
    let newState = selectedTeamReducer(initialState, addSelectedTeamToStore);

    expect(newState).toEqual(addSelectedTeamToStore.team);
  });

  it('should have an initial state', () => {

    let expected = ""
    expect(selectedTeamReducer(undefined, {})).toEqual(expected)

  })
});