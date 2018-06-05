const addSelectedTeamToStore = (team) => {
  return {
    type: 'ADD_SELECTED_TEAM',
    team: team
  };
};

export { addSelectedTeamToStore };