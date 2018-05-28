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

const addBoxScoresToStore = (boxScores) => {
  return {
    type: 'ADD_BOXSCORES',
    boxScores: boxScores
  }
}

const removeBoxscoreFromStore = (boxscore) => {
  return {
    type: 'REMOVE_BOXSCORE'
  }
}

export {
  addSummariesToStore,
  addBoxScoresToStore,
  removeBoxscoreFromStore,
  removeSummariesFromStore
}
