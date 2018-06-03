import { winningMessages, losingMessages, eventMessages, batterMessages, pitcherMessages } from './talkingPointPhrases';
import { eventCleaner, inningCleaner, eventToSlang } from './eventTranslations';
import { filterBatters, filterPitchers, findHighestAvg, findMostWins } from '../Helpers/dataCleaner';

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

const secondTalkingPoint = (yourTeam, mlbData) => {
  let message;
  let randNumMessage = Math.floor(Math.random() * eventMessages('x', 'x', 'x', 'x').length);
  let randomNumEvent;

  if (mlbData.homeTeam === yourTeam) {
    randomNumEvent = Math.floor(Math.random() * mlbData.homeTeamEvents.length)
    //figure out what happens when there are no events.
    let event = eventToSlang(eventCleaner(mlbData.homeTeamEvents[randomNumEvent].hitter_outcome));
    let inning = inningCleaner(mlbData.homeTeamEvents[randomNumEvent].inning);
    let runsScored = mlbData.homeTeamEvents[randomNumEvent].runners.length;
    message = eventMessages(yourTeam, event, inning, runsScored)[randNumMessage];
    if (message === undefined) {
      message = 'That was such a boring game. Literally nothing eventful happened'
    }

  } else if (mlbData.awayTeam === yourTeam) {
    randomNumEvent = Math.floor(Math.random() * mlbData.awayTeamEvents.length)
    let event = eventToSlang(eventCleaner(mlbData.awayTeamEvents[randomNumEvent].hitter_outcome));
    let inning = inningCleaner(mlbData.awayTeamEvents[randomNumEvent].inning);
    let runsScored = mlbData.awayTeamEvents[randomNumEvent].runners.length;
    message = eventMessages(yourTeam, event, inning, runsScored)[randNumMessage];
    if (message === undefined) {
      message = 'That was such a boring game. Literally nothing eventful happened'
    }
  } else {
    message = `Talk about the weather or something, I dunno.`;
  }
  return message;
}

const thirdTalkingPoint = (yourTeam, teamStats) => {
  let message;
  let randomBatterNumber;
  let randomPitcherNumber;
  let randNum = Math.floor(Math.random() * 2)
  let bestBatter = findHighestAvg(filterBatters(teamStats, yourTeam));
  let bestPitcher = findMostWins(filterPitchers(teamStats, yourTeam));

  if(randNum < 1) {
    randomBatterNumber = Math.floor(Math.random() * batterMessages('x', 'x', 'x').length);
    message = batterMessages(bestBatter.first_name, bestBatter.last_name, bestBatter.statistics.hitting.overall.avg)[randomBatterNumber]
  } 
  else if(randNum >= 1) {
    randomPitcherNumber = Math.floor(Math.random() * pitcherMessages('x', 'x', 'x').length);
    message = pitcherMessages(bestPitcher.first_name, bestPitcher.last_name, bestPitcher.statistics.pitching.overall.games.win)[randomPitcherNumber]
  }
return message
}

export { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint };