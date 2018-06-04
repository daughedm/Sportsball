const mockCleanSummary = {
  homeTeam: 'Indians',
  awayTeam: 'Cubs',
  homeTeamRuns: 100,
  awayTeamRuns: 0,
  winningTeam: 'Indians',
  losingTeam: 'Cubs'
}

const mockCleanBoxscores = {
  homeTeam: 'Indians',
  awayTeam: 'Cubs',
  homeTeamEvents: [{},{}],
  awayTeamEvents: [{},{}]
}

const mockCleanTeamStats = {Indians: {stats: 200}}

export default { mockCleanSummary, mockCleanBoxscores, mockCleanTeamStats }