import {
  yesterdaysDate,
  gameSummaryCleaner,
  boxScoresCleaner,
  findGame
} from './dataCleaner';

import { mockSummaryData, mockBoxScoreData } from '../mockData/mockdata';


describe('dataCleaner', () => {
  describe('yesterdaysDate', () => {
    it('should create', () => {

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