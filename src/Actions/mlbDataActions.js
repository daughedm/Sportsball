const addSummariesToStore = (summaries) => {
  return {
    type: 'ADD_SUMMARIES',
    summaries: summaries
  }
}

const addSingleSummaryToStore = (summary) => {
  return {
    type: 'ADD_SINGLE_SUMMARY',
    summary: summary
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

const addSingleBoxScoreToStore = (boxScore) => {
  return {
    type: 'ADD_SINGLE_BOXSCORE',
    boxScore: boxScore
  }
}

const removeBoxscoreFromStore = (boxscore) => {
  return {
    type: 'REMOVE_BOXSCORE'
  }
}

const addTeamStatsToStore = (teamStats) => {
  return {
    type: 'ADD_TEAM_STATS',
    teamStats: teamStats
  }
}

export {
  addSummariesToStore,
  addBoxScoresToStore,
  removeBoxscoreFromStore,
  removeSummariesFromStore,
  addSingleBoxScoreToStore,
  addSingleSummaryToStore,
  addTeamStatsToStore,
}
