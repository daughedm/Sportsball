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

console.log(findGame('Astros'))

let score = `${fatCutter[0].homeTeamRuns} - ${fatCutter[0].awayTeamRuns}`;




const winningMessages = [`Wow, that game was sick! I can’t believe they won ${score}!`, `BAM, that game was sick! I can’t believe they won ${score}!`, `SWEET, that game was sick! I can’t believe they won ${score}!`, `Chill, that game was sick! I can’t believe they won ${score}!`, `Damn, that game was sick! I can’t believe they won ${score}!`]

const randomMessage = () => {
  const randNum = Math.floor(Math.random() * winningMessages.length);
  return winningMessages[randNum];
}