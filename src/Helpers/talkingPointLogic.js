import { winningMessages, losingMessages, eventMessages, batterMessages, pitcherMessages, winningCloseMessages, losingCloseMessages, blowoutLossMessages, blowoutWinMessages, batterHRMessages, pitcherERAMessages } from './talkingPointPhrases';
import { eventCleaner, inningCleaner, eventToSlang } from './eventTranslations';
import { filterBatters, filterPitchers, findHighestAvg, findMostWins, findLowestERA, findMostHR } from '../Helpers/dataCleaner';

const firstTalkingPoint = (yourTeam, mlbData) => {
  let score = `${mlbData.homeTeamRuns} - ${mlbData.awayTeamRuns}`;
  let homeWinDif = mlbData.homeTeamRuns - mlbData.awayTeamRuns;
  let awayWinDif = mlbData.awayTeamRuns - mlbData.homeTeamRuns;
  let randNum;
  let message;
  
  if (mlbData.winningTeam === undefined) {
    message = `The ${yourTeam} didn't play today!`;
  } else if (mlbData.winningTeam === yourTeam && homeWinDif <= 1 && awayWinDif <= 1) {
    randNum = Math.floor(Math.random() * winningCloseMessages(yourTeam, score).length);
    message = winningCloseMessages(yourTeam, score)[randNum];
  } else if ((mlbData.winningTeam === yourTeam && homeWinDif >= 6) || (mlbData.winningTeam === yourTeam && awayWinDif >= 6)) {
    randNum = Math.floor(Math.random() * blowoutWinMessages(yourTeam, score).length);
    message = blowoutWinMessages(yourTeam, score)[randNum];
  } else if (mlbData.winningTeam === yourTeam) {
    randNum = Math.floor(Math.random() * winningMessages(yourTeam, score).length);
    message = winningMessages(yourTeam, score)[randNum];
  } else if (mlbData.winningTeam !== yourTeam && homeWinDif <= 1 && awayWinDif <= 1) {
    randNum = Math.floor(Math.random() * losingCloseMessages(yourTeam, score).length);
    message = losingCloseMessages(yourTeam, score)[randNum];
  } else if ((mlbData.winningTeam !== yourTeam && homeWinDif >= 6) || (mlbData.winningTeam !== yourTeam && awayWinDif >= 6)) {
    randNum = Math.floor(Math.random() * blowoutLossMessages(yourTeam, score).length);
    message = blowoutLossMessages(yourTeam, score)[randNum];
  } else if (mlbData.winningTeam !== yourTeam) {
    randNum = Math.floor(Math.random() * losingMessages(yourTeam, score).length);
    message = losingMessages(yourTeam, score)[randNum];
  } 
  return message;
};

const secondTalkingPoint = (yourTeam, mlbData) => {
  let message;
  let randNumMessage = Math.floor(Math.random() * eventMessages('x', 'x', 'x', 'x').length);
  let randomNumEvent;
   
  if (mlbData.homeTeam === yourTeam && !mlbData.homeTeamEvents) {
    message = 'That was such a boring game. Literally nothing eventful happened.';
  }
  else if (mlbData.homeTeam === yourTeam) {
   
    randomNumEvent = Math.floor(Math.random() * mlbData.homeTeamEvents.length);
    let event = eventToSlang(eventCleaner(mlbData.homeTeamEvents[randomNumEvent].hitter_outcome));
    let inning = inningCleaner(mlbData.homeTeamEvents[randomNumEvent].inning);
    let runsScored = mlbData.homeTeamEvents[randomNumEvent].runners.length;
    message = eventMessages(yourTeam, event, inning, runsScored)[randNumMessage];

  } else if (mlbData.awayTeam === yourTeam && !mlbData.awayTeamEvents) {
    message = 'That was such a boring game. Literally nothing eventful happened.';
  }
  
  else if (mlbData.awayTeam === yourTeam) {

    randomNumEvent = Math.floor(Math.random() * mlbData.awayTeamEvents.length);
    let event = eventToSlang(eventCleaner(mlbData.awayTeamEvents[randomNumEvent].hitter_outcome));
    let inning = inningCleaner(mlbData.awayTeamEvents[randomNumEvent].inning);
    let runsScored = mlbData.awayTeamEvents[randomNumEvent].runners.length;
    message = eventMessages(yourTeam, event, inning, runsScored)[randNumMessage];
  } else {
    message = 'Talk about the weather or something, I dunno.';
  }
  return message;
};

const thirdTalkingPoint = (yourTeam, teamStats) => {
  let message;
  let randomBatterNumber;
  let randomPitcherNumber;
  let randNum = Math.floor(Math.random() * 4);
  let bestBatter = findHighestAvg(filterBatters(teamStats, yourTeam));
  let bestPitcher = findMostWins(filterPitchers(teamStats, yourTeam));
  let lowestERA = findLowestERA(filterPitchers(teamStats, yourTeam));
  let mostHR = findMostHR(filterBatters(teamStats, yourTeam));
  console.log('****',lowestERA);

  if(randNum === 0) {
    randomBatterNumber = Math.floor(Math.random() * batterMessages('x', 'x', 'x').length);
    message = batterMessages(bestBatter.first_name, bestBatter.last_name, bestBatter.statistics.hitting.overall.avg)[randomBatterNumber];
  } 
  else if(randNum === 1) {
    randomPitcherNumber = Math.floor(Math.random() * pitcherMessages('x', 'x', 'x').length);
    message = pitcherMessages(bestPitcher.first_name, bestPitcher.last_name, bestPitcher.statistics.pitching.overall.games.win)[randomPitcherNumber];
  }
  else if (randNum === 2) {
    randomPitcherNumber = Math.floor(Math.random() * pitcherERAMessages('x', 'x', 'x').length);
    message = pitcherERAMessages(lowestERA.first_name, lowestERA.last_name, lowestERA.statistics.pitching.overall.era)[randomPitcherNumber];
  }
  else if (randNum === 3) {
    randomBatterNumber = Math.floor(Math.random() * batterHRMessages('x', 'x', 'x').length);
    message = batterHRMessages(mostHR.first_name, mostHR.last_name, mostHR.statistics.hitting.overall.onbase.hr)[randomBatterNumber];
  }
  return message;
};

export { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint };