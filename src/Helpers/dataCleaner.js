const yesterdaysDate = () => {
  let todayTimeStamp = new Date();
  let oneDayTimeStamp = 1000 * 60 * 60 * 24;
  let diff = todayTimeStamp - oneDayTimeStamp;
  let yesterdayDate = new Date(diff);
  let year = yesterdayDate.getFullYear()
  let month = yesterdayDate.getMonth() + 1;
  let day = yesterdayDate.getDate();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  let yesterdayString = year + '/' + month + '/' + day;
  return yesterdayString;
}

const gameSummaryCleaner = (rawSummaryData) => {
  const cleanedSummary = rawSummaryData.league.games.map(ballGame => {
    return {
      homeTeam: ballGame.game.home.name,
      awayTeam: ballGame.game.away.name,
      homeTeamRuns: ballGame.game.home.runs,
      awayTeamRuns: ballGame.game.away.runs,
      winningTeam: ballGame.game.home.runs > ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name,
      losingTeam: ballGame.game.home.runs < ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name
    }
  })
  return cleanedSummary;
}

const boxScoresCleaner = (rawBoxScoresData) => {
  const cleanedBoxScores = rawBoxScoresData.league.games.map(ballgame => {
    return {
      homeTeam: ballgame.game.home.name,
      awayTeam: ballgame.game.away.name,
      homeTeamEvents: ballgame.game.home.events,
      awayTeamEvents: ballgame.game.home.events
    }
  })
  return cleanedBoxScores;
} 

const findGame = (yourTeam, path) => {
  let singleGame = path.find(ballGame => {
    return ballGame.homeTeam.includes(yourTeam) || ballGame.awayTeam.includes(yourTeam)
  })
  if (singleGame === undefined) {
    singleGame = `The ${yourTeam} didn't play!`
  }
  return singleGame;
}

export { 
  yesterdaysDate,
  gameSummaryCleaner,
  boxScoresCleaner,
  findGame
};