const selectedTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_TEAM':
      return action.team;
    default:
      return state;
  }
}

export default selectedTeamReducer;