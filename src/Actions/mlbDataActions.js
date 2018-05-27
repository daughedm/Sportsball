const addSummaryToStore = (summary) => {
  return {
    type: 'ADD_SUMMARY',
    summary: summary
  }
}

const removeSummaryFromStore = (summary) => {
  return {
    type: 'REMOVE_SUMMARY'
  }
}

const addBoxScoreToStore = (boxscore) => {
  return {
    type: 'ADD_BOXSCORE',
    boxscore: boxscore
  }
}

const removeBoxscoreFromStore = (boxscore) => {
  return {
    type: 'REMOVE_BOXSCORE'
  }
}

export {
  addSummaryToStore,
  addBoxScoreToStore,
  removeBoxscoreFromStore,
  removeSummaryFromStore
}
