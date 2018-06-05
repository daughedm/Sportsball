import * as actions from './mlbDataActions';
import {
  mockCleanSummary,
  mockCleanBoxscores,
  mockCleanTeamStats
} from './../mockData/mockCleanData';


describe('mlbDataActions', () => {
  describe('addSummariesToStore', () => {
    it('has a type of ADD_SUMMARIES', () => {
      const summariesData = mockCleanSummary;
      const actual = actions.addSummariesToStore(summariesData);

      expect(actual).toEqual({
        type: 'ADD_SUMMARIES',
        summaries: summariesData
      });
    });
  });

  describe('addSingleSummaryToStore', () => {
    it('has a type of ADD_SINGLE_SUMMARY', () => {
      const summariesData = mockCleanSummary;
      const actual = actions.addSingleSummaryToStore(summariesData);

      expect(actual).toEqual({
        type: 'ADD_SINGLE_SUMMARY',
        summary: summariesData
      });
    });
  });

  describe('addBoxScoresToStore', () => {
    it('has a type of ADD_BOXSCORES', () => {
      const boxScoresData = mockCleanBoxscores;
      const actual = actions.addBoxScoresToStore(boxScoresData);

      expect(actual).toEqual({
        type: 'ADD_BOXSCORES',
        boxScores: boxScoresData
      });
    });
  });

  describe('addSingleBoxScoreToStore', () => {
    it('has a type of ADD_SINGLE_BOXSCORE', () => {
      const boxScoresData = mockCleanBoxscores;
      const actual = actions.addSingleBoxScoreToStore(boxScoresData);

      expect(actual).toEqual({
        type: 'ADD_SINGLE_BOXSCORE',
        boxScore: boxScoresData
      });
    });
  });

  describe('addTeamStatsToStore', () => {
    it('has a type of ADD_TEAM_STATS', () => {
      const teamStatsData = mockCleanTeamStats;
      const actual = actions.addTeamStatsToStore(teamStatsData);

      expect(actual).toEqual({
        type: 'ADD_TEAM_STATS',
        teamStats: teamStatsData
      });
    });
  });
});


