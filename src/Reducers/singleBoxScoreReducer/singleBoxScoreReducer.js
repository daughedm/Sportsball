const singleBoxScoresReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SINGLE_BOXSCORE':
      return action.boxScore;
    default:
      return state;
  }
}

export default singleBoxScoresReducer;