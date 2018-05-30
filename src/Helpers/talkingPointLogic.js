import { winningMessages, losingMessages } from './talkingPointPhrases';

const firstTalkingPoint = (yourTeam, mlbData) => {
  let score = `${mlbData.homeTeamRuns} - ${mlbData.awayTeamRuns}`;
  let randNum;
  let message;

  if (mlbData.winningTeam === yourTeam) {
    randNum = Math.floor(Math.random() * winningMessages(yourTeam, score).length);
    message = winningMessages(yourTeam, score)[randNum];
  } else if (mlbData.winningTeam !== yourTeam && mlbData.winningTeam !== undefined) {
    randNum = Math.floor(Math.random() * losingMessages(yourTeam, score).length);
    message = losingMessages(yourTeam, score)[randNum];
  } else {
    message = `The ${yourTeam} didn't play today!`;
  }
  return message;
}

export { firstTalkingPoint };