import { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint } from './talkingPointLogic';
import { winningMessages, losingMessages } from './talkingPointPhrases';
import {mockCleanTeamStats} from './../mockData/mockCleanData';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

describe('talkingPointLogic', () => {
  let mockData;
  let mockBoxscore;
  beforeEach(() => {
    mockData = {
      winningTeam: 'Indians',
      losingTeam: 'Cubs',
      homeTeamRuns: 1,
      awayTeamRuns: 0,
      winningTeam: 'Indians'
    };
    mockBoxscore = {
      homeTeam: 'Indians',
      awayTeam: 'Cubs',
      homeTeamEvents: [{
        hitter_outcome: 'aHR',
        runners:[1,2,3]},{runners:[1,2,3]}],
      awayTeamEvents: [{},{}]
    };
  });
  describe('firstTalkingPoint', () => {
    it('should return a string', () => {
      const actual = firstTalkingPoint('Indians', mockData);
      const expected = 'string';

      expect(typeof actual).toEqual(expected);
    });

    it('should return a message if your team did not play', () => {
      const mockNoGame = {
        winningTeam: undefined,
        losingTeam: undefined,
        homeTeamRuns: null,
        awayTeamRuns: null,
        winningTeam: undefined
      };
      
      const actual = firstTalkingPoint('Rockies', mockNoGame);
      const expected = 'The Rockies didn\'t play today!';

      expect(actual).toEqual(expected);
    });

    it('should return a winning phrase if your team wins', () => {
      const actual = firstTalkingPoint('Indians', mockData);
      const expected = 'Wow, that game was sick! I can’t believe the Indians won 1 - 0!';

      expect(actual).toEqual(expected);
    });

    it('should return a losing phrase if your team loses', () => {
      const actual = firstTalkingPoint('Cubs', mockData);
      const expected = 'Damn, what a bummer! I can’t believe the Cubs lost 1 - 0!';

      expect(actual).toEqual(expected);
    });
  });

  describe('secondTalkingPoint', () => {
    it('should return a string', () => {
      const actual = secondTalkingPoint('Indians', mockBoxscore);
      const expected = 'string';

      expect(typeof actual).toEqual(expected);
    });

    it('should return a message if your team did not play', () => {
      const mockNoGame = {
        homeTeam: undefined,
        awayTeam: undefined,
        homeTeamEvents: undefined,
        awayTeamEvents: undefined
      };

      const actual = secondTalkingPoint('Rockies', mockNoGame);
      const expected = 'Talk about the weather or something, I dunno.';

      expect(actual).toEqual(expected);
    });

    it('should return a random phrase with stats intepolated in', () => {
      const actual = secondTalkingPoint('Indians', mockBoxscore);
      const expected = 'Did you see that dinger in the inning that scored 3?';

      expect(actual).toEqual(expected);
    });
  });

  describe('thirdTalkingPoint', () => {
    it('should return a random message with a player and stat', () => {
      const actual = thirdTalkingPoint('Indians', mockCleanTeamStats);
      const expected = 'Lonnie Chisenhall is having great year hitting .235.';

      expect(actual).toEqual(expected);
    });

    it('should return a string', () => {
      const actual = thirdTalkingPoint('Indians', mockCleanTeamStats);
      const expected = 'string';

      expect(typeof actual).toEqual(expected);
    });
  });
});