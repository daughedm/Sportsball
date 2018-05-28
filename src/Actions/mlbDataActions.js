const addSummariesToStore = (summaries) => {
  return {
    type: 'ADD_SUMMARIES',
    summaries: summaries
  }
}

const removeSummariesFromStore = (summaries) => {
  return {
    type: 'REMOVE_SUMMARIES'
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
  addSummariesToStore,
  addBoxScoreToStore,
  removeBoxscoreFromStore,
  removeSummariesFromStore
}
