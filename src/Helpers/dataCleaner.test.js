const fatCutter = mlbdata.league.games.map(ballGame => {
  return {
    homeTeam: ballGame.game.home.name,
    awayTeam: ballGame.game.away.name,
    homeTeamRuns: ballGame.game.home.runs,
    awayTeamRuns: ballGame.game.away.runs,
    winningTeam: ballGame.game.home.runs > ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name,
    losingTeam: ballGame.game.home.runs < ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name
  }
})


const findGame = (yourTeam) => {
  const singleGame = fatCutter.find(ballGame => {
    if (ballGame.homeTeam.includes(yourTeam) || ballGame.awayTeam.includes(yourTeam)) {
      return true;
    }
  })
  return singleGame;
}

