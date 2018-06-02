import { firstTalkingPoint } from './talkingPointLogic';
import { winningMessages, losingMessages } from './talkingPointPhrases';

describe('talkingPointLogic', () => {
  let mockData;
  beforeEach(() => {
    mockData = {
      winningTeam: 'Indians',
      losingTeam: 'Cubs',
      homeTeamRuns: 1,
      awayTeamRuns: 0,
      winningTeam: 'Indians'
    }
  })
  describe('firstTalkingPoint', () => {
    it('should return a string', () => {
      const actual = firstTalkingPoint('Indians', mockData);
      const expected = 'string'

      expect(typeof actual).toEqual(expected);
    })

    it('should return a message if your team did not play', () => {
      const mockNoGame = {
        winningTeam: undefined,
        losingTeam: undefined,
        homeTeamRuns: null,
        awayTeamRuns: null,
        winningTeam: undefined
      }
      
      const actual = firstTalkingPoint('Rockies', mockNoGame);
      const expected = `The Rockies didn't play today!`

      expect(actual).toEqual(expected);
    })
  })
})