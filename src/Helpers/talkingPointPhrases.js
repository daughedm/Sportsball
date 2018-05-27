const winningMessages = (yourTeam, score) => {
  return [`Wow, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `BAM, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `SWEET, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `Chill, that game was sick! I can’t believe ${yourTeam} won ${score}!`, `Damn, that game was sick! I can’t believe ${yourTeam} won ${score}!`]
}

const losingMessages = (yourTeam, score) => {
  return [`Damn, what a bummer! I can’t believe ${yourTeam} lost ${score}!`, `Dude, how could the ${yourTeam} lose! They are better than that`, `I thought ${yourTeam} were going to pull it out, but they lost ${score}!`, `I'm not concerned, the ${yourTeam} have a lot of games to play`, `Damn, that game was sick! Too bad the ${yourTeam} lost ${score}!`]
}

export { winningMessages, losingMessages };