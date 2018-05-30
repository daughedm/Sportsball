const winningMessages = (yourTeam, score) => {
  return [`Wow, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `The ${yourTeam} just know how to win. `, `BAM, that game was sick! I can’t believe the ${yourTeam}  won ${score}!`, `SWEET, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `Chill, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `Damn, that game was sick! I can’t believe the ${yourTeam} won ${score}!`, `The win today was a total team effort.`, `The ${yourTeam} really played within themselves today.`, `The ${yourTeam} were due for a win.`, `Nothing comes easy in this league, great win for the ${yourTeam}.`]
}

const losingMessages = (yourTeam, score) => {
  return [`Damn, what a bummer! I can’t believe the ${yourTeam} lost ${score}!`, `Dude, how could the ${yourTeam} lose! They are better than that.`, `I thought the ${yourTeam} were going to pull it out, but they lost ${score}!`, `I'm not concerned, the ${yourTeam} have a lot of games to play`, `Damn, that game was sick! Too bad the ${yourTeam} lost ${score}!`, `The ${yourTeam} didn't have their best stuff today. They lost ${score}`, `On paper the ${yourTeam} were the team to beat but they just couldn't get that win.`]
}

export { winningMessages, losingMessages };