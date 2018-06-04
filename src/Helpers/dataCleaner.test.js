import {
  yesterdaysDate,
  gameSummaryCleaner,
  boxScoresCleaner,
  findGame
} from './dataCleaner';

import { mockFullCleanBoxScores } from './../mockData/mockCleanData';

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
    it('should create an array of objects with home, away, winning, and runs', () => {
      const actual = gameSummaryCleaner(mockSummaryData)
      const expected = [{
        homeTeam: 'White Sox',
        awayTeam: 'Orioles',
        homeTeamRuns: 3,
        awayTeamRuns: 9,
        winningTeam: 'Orioles',
        losingTeam: 'White Sox'
      }]

      expect(actual).toEqual(expected);

    })
  })

  describe('boxScoresCleaner', () => {
    it('should return an array cleaned box scores', () => {
      const actual = boxScoresCleaner(mockBoxScoreData);
      const expected = mockFullCleanBoxScores

      expect(actual).toEqual(expected);
    })
  })

  describe('findGame', () => {
    it('should return a single game object', () => {
      const actual = findgame()
    })
  })
})