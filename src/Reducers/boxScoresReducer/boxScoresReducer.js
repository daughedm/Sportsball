const boxScoresReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOXSCORES':
      return action.boxScores;
    default:
      return state;
  }
}

export default boxScoresReducer;