const singleGameSummaryReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_SINGLE_SUMMARY':
    return action.summary;
  default:
    return state;
  }
};

export default singleGameSummaryReducer;