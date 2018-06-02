const winningMessages = (yourTeam, score) => {
  return [`Wow, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `The ${yourTeam} just know how to win. `, `BAM, that game was sick! I can’t believe the ${yourTeam}  won ${score}!`, `SWEET, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `Chill, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `Damn, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `The win today was a total team effort.`, `The ${yourTeam} really played within themselves today.`, `The ${yourTeam} were due for a win.`, `Nothing comes easy in this league, great win for the ${yourTeam}.`, `The ${yourTeam} were clearly the more motivated team this game.`, `That was a statement win for the ${yourTeam}!`,`The ${score} margin of victory really shows the ${yourTeam} wanted it more.`]
}

const losingMessages = (yourTeam, score) => {
  return [`Damn, what a bummer! I can’t believe the ${yourTeam} lost ${score}!`, `Dude, how could the ${yourTeam} lose! They are better than that.`, `I thought the ${yourTeam} were going to pull it out, but they lost ${score}!`, `I'm not concerned, the ${yourTeam} have a lot of games to play`, `Damn, that game was sick! Too bad the ${yourTeam} lost ${score}!`, `The ${yourTeam} didn't have their best stuff today. They lost ${score}`, `On paper the ${yourTeam} were the team to beat but they just couldn't get that win.`, `The other team just wanted it more. We lost ${score}.`, `The ${yourTeam} need to rub some dirt on this loss.`, `You can't teach a team to win, but they need to learn soon.`, `The ${yourTeam} are still trying to figure out how to win.`, `The ${yourTeam} loss sure greased my glove!`]
}

const eventMessages = (yourTeam, event, inning, numberScored) => {
  return [`Did you see that ${event} in the ${inning} that scored ${numberScored}?`, `That ${event} in the ${inning} was so clutch.`, `I was so pumped about that ${event} in the ${inning}.`, `The ${inning} was such an explosive inning for us.`, `The ${event} in the ${inning} was amazing.`, `The ${event} in the ${inning} was very underrated.`]
}

const playerMessages = (player, stat) => {
  return [`${player} is having great year hitting ${stat}.`]
}

export { winningMessages, losingMessages, eventMessages };


