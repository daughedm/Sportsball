const mockCleanSummary = {
  homeTeam: 'Indians',
  awayTeam: 'Cubs',
  homeTeamRuns: 100,
  awayTeamRuns: 0,
  winningTeam: 'Indians',
  losingTeam: 'Cubs'
}

const mockCleanBoxScores = {
  homeTeam: 'Indians',
  awayTeam: 'Cubs',
  homeTeamEvents: [{runners:[1,2,3]},{runners:[1,2,3]}],
  awayTeamEvents: [{},{}]
}

const mockCleanTeamStats = {
    Indians: [{
          preferred_name: 'Lonnie',
          first_name: 'Lonnie',
          last_name: 'Chisenhall',
          jersey_number: '8',
          id: '7a8633ea-0824-4164-b0b1-e4394da6fc43',
          position: 'OF',
          primary_position: 'RF',
          statistics: {
            hitting: {
              overall: {
                ab: 17,
                lob: 4,
                rbi: 0,
                abhr: 0,
                abk: 4.25,
                bip: 13,
                babip: 0.308,
                bbk: 0.75,
                bbpa: 0.143,
                iso: 0.059,
                obp: 0.381,
                ops: 0.675,
                seca: 0.294,
                slg: 0.294,
                xbh: 1,
                pitch_count: 91,
                lob_risp_2out: 0,
                team_lob: 0,
                ab_risp: 1,
                hit_risp: 0,
                rbi_2out: 0,
                linedrive: 5,
                groundball: 5,
                popup: 1,
                flyball: 2,
                ap: 21,
                avg: '.235',
                gofo: 1,
                onbase: {
                  s: 3,
                  d: 1,
                  t: 0,
                  hr: 0,
                  tb: 5,
                  bb: 2,
                  ibb: 1,
                  hbp: 1,
                  fc: 0,
                  roe: 0,
                  h: 4,
                  cycle: 0
                },
                runs: {
                  total: 3
                },
                outcome: {
                  klook: 13,
                  kswing: 9,
                  ktotal: 22,
                  ball: 30,
                  iball: 0,
                  dirtball: 4,
                  foul: 21
                },
                outs: {
                  po: 1,
                  fo: 2,
                  fidp: 0,
                  lo: 2,
                  lidp: 0,
                  go: 5,
                  gidp: 1,
                  klook: 1,
                  kswing: 3,
                  ktotal: 4,
                  sacfly: 0,
                  sachit: 0
                },
                steal: {
                  caught: 0,
                  stolen: 1,
                  pct: 1,
                  pickoff: 0
                },
                pitches: {
                  count: 91,
                  btotal: 35,
                  ktotal: 56
                },
                games: {
                  start: 6,
                  play: 7,
                  finish: 1,
                  complete: 4
                }
              }
            },
            fielding: {
              overall: {
                po: 11,
                a: 0,
                dp: 0,
                tp: 0,
                error: 0,
                tc: 11,
                fpct: 1,
                c_wp: 0,
                pb: 0,
                rf: 1.571,
                inn_1: 136,
                inn_2: 45.1,
                steal: {
                  caught: 0,
                  stolen: 0,
                  pickoff: 0,
                  pct: 0
                },
                errors: {
                  throwing: 0,
                  fielding: 0,
                  interference: 0,
                  total: 0
                },
                assists: {
                  outfield: 0,
                  total: 0
                },
                games: {
                  start: 6,
                  play: 7,
                  finish: 1,
                  complete: 0
                }
              },
              positions: [{
                po: 11,
                a: 0,
                dp: 0,
                tp: 0,
                error: 0,
                tc: 11,
                fpct: 1,
                c_wp: 0,
                pb: 0,
                rf: 1.571,
                inn_1: 136,
                inn_2: 45.1,
                position: 'RF',
                steal: {
                  caught: 0,
                  stolen: 0,
                  pickoff: 0,
                  pct: 0
                },
                errors: {
                  throwing: 0,
                  fielding: 0,
                  interference: 0,
                  total: 0
                },
                assists: {
                  outfield: 0,
                  total: 0
                },
                games: {
                  start: 6,
                  play: 7,
                  finish: 1,
                  complete: 0
                }
              }]
            }
          }
        }]}

export { mockCleanSummary, mockCleanBoxScores, mockCleanTeamStats }