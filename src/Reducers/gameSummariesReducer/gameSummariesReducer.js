const gameSummariesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUMMARIES':
      return action.summaries;
    default:
      return state;
  }
} 

export default gameSummariesReducer;