const yesterdaysDate = () => {
  let todayTimeStamp = new Date();
  let oneDayTimeStamp = 1000 * 60 * 60 * 24;
  let diff = todayTimeStamp - oneDayTimeStamp;
  let yesterdayDate = new Date(diff);
  let year = yesterdayDate.getFullYear();
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
};

const gameSummaryCleaner = (rawSummaryData) => {
  const cleanedSummary = rawSummaryData.league.games.map(ballGame => {
    return {
      homeTeam: ballGame.game.home.name,
      awayTeam: ballGame.game.away.name,
      homeTeamRuns: ballGame.game.home.runs,
      awayTeamRuns: ballGame.game.away.runs,
      winningTeam: ballGame.game.home.runs > ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name,
      losingTeam: ballGame.game.home.runs < ballGame.game.away.runs ? ballGame.game.home.name : ballGame.game.away.name
    };
  });
  return cleanedSummary;
};

const boxScoresCleaner = (rawBoxScoresData) => {
  const cleanedBoxScores = rawBoxScoresData.league.games.map(ballgame => {
    return {
      homeTeam: ballgame.game.home.name,
      awayTeam: ballgame.game.away.name,
      homeTeamEvents: ballgame.game.home.events,
      awayTeamEvents: ballgame.game.away.events
    };
  });
  return cleanedBoxScores;
}; 

const findGame = (yourTeam, path) => {
  let singleGame = path.find(ballGame => {
    return ballGame.homeTeam.includes(yourTeam) || ballGame.awayTeam.includes(yourTeam);
  });
  if (singleGame === undefined) {
    singleGame = `The ${yourTeam} didn't play!`;
  }
  return singleGame;
};

const teamStatCleaner = stats => {
  const teamStats = {};
  teamStats[stats.name] = stats.players;

  return teamStats;
};

const filterBatters = (teamStat, team) => {
  const onlyBatters = teamStat[team].filter(player => {
    return player.position !== 'P';
  });
  return onlyBatters;
};

const filterPitchers = (teamStat, team) => {
  const onlyPitchers = teamStat[team].filter(player => {
    return player.position === 'P';
  });
  return onlyPitchers;
};


const findHighestAvg = (batters) => {
  const sortedBatters = batters.sort((a, b) => b.statistics.hitting.overall.avg - a.statistics.hitting.overall.avg);
  return sortedBatters[0];
};

const findMostHR = (batters) => {
  const sortedBatters = batters.sort((a, b) => b.statistics.hitting.overall.onbase.hr - a.statistics.hitting.overall.onbase.hr);
  return sortedBatters[0];
};

const findMostWins = (pitchers) => {
  const sortedPitchers = pitchers.sort((a, b) => b.statistics.pitching.overall.games.win - a.statistics.pitching.overall.games.win);
  return sortedPitchers[0];
};

const findLowestERA = (pitchers) => {
  const sortedPitchers = pitchers.sort((a, b) => a.statistics.pitching.overall.era - b.statistics.pitching.overall.era);
  return sortedPitchers[0];
};


export { 
  yesterdaysDate,
  gameSummaryCleaner,
  boxScoresCleaner,
  findGame,
  teamStatCleaner,
  filterBatters,
  filterPitchers,
  findHighestAvg,
  findMostWins,
  findMostHR,
  findLowestERA
};