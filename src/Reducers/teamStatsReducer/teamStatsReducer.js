const teamStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TEAM_STATS':
      return action.teamStats;
    default:
      return state;
  }
}

export default teamStatsReducer;