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

const winningMessages = (yourTeam, score) => {
  return [`Wow, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `BAM, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `SWEET, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `Chill, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `Damn, that game was sick! I can’t believe ${yourTeam} won ${score}!`]
}

const losingMessages = (yourTeam, score) => {
  return [`Damn, what a bummer! I can’t believe ${yourTeam} lost ${score}!`, `Dude, how could the ${yourTeam} lose! They are better than that`, `I thought ${yourTeam} were going to pull it out, but they lost ${score}!`, `I'm not concerned, the ${yourTeam} have a lot of games to play`, `Damn, that game was sick! Too bad the ${yourTeam} lost ${score}!`]
}

const firstTalkingPoint = (yourTeam) => {
  const teamsGame = findGame(yourTeam);
  let score = `${teamsGame.homeTeamRuns} - ${teamsGame.awayTeamRuns}`;
  let randNum;
  let message;

  if (teamsGame.winningTeam === yourTeam) {
    randNum = Math.floor(Math.random() * winningMessages(yourTeam, score).length);
    console.log(randNum)
    message = winningMessages(yourTeam, score)[randNum];
  } else if (teamsGame.winningTeam !== yourTeam && teamsGame.winningTeam !== undefined) {
    randNum = Math.floor(Math.random() * losingMessages(yourTeam, score).length);
    message = losingMessages(yourTeam, score)[randNum];
  } else {
    message = `The ${yourTeam} didn't play today!`;
  }
  return message;
}