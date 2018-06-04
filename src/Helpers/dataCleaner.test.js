import {
  yesterdaysDate,
  gameSummaryCleaner,
  boxScoresCleaner,
  findGame
} from './dataCleaner';

import { mockSummaryData, mockBoxScoreData } from '../mockData/mockdata';


const fixedDate = new Date('2018-02-28T09:39:59');

Date = class extends Date {
  constructor() {
    super();

    return fixedDate;
  }
};

describe('dataCleaner', () => {
  describe('yesterdaysDate', () => {
    it('should return yesterdays date in year, month, day format', () => {
      const actual = yesterdaysDate();
      const expected = '2018/02/28';

      expect(actual).toEqual(expected);
    })
  })
  describe('gameSummaryCleaner', () => {
    it('should create an object with home, away, winning, and runs', () => {
      console.log(mockSummaryData);
      const actual = gameSummaryCleaner(mockSummaryData)
      const expected = {
        homeTeam: 'Cubs',
        awayTeam: '',
        homeTeamRuns: 4,
        awayTeamRuns: 5,
        winningTeam: 'Cubs',
        losingTeam: ''
      }

      expect(actual).toEqual(expected);

    })
  })
})