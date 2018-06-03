import { firstTalkingPoint } from './talkingPointLogic';
import { winningMessages, losingMessages } from './talkingPointPhrases';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

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

      it('should return a winning phrase if your team wins', () => {
        const actual = firstTalkingPoint('Indians', mockData);
        const expected = 'Wow, that game was sick! I can’t believe the Indians won 1 - 0!'

        expect(actual).toEqual(expected);
      })

        it('should return a losing phrase if your team loses', () => {
          const actual = firstTalkingPoint('Cubs', mockData);
          const expected = 'Damn, what a bummer! I can’t believe the Cubs lost 1 - 0!'

          expect(actual).toEqual(expected);
        })
  })
})