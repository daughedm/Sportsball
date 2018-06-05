import * as MOCKDATA from './../../mockData/mockdata';

export const gameSummariesFetch = jest.fn().mockImplementation(() => 
  Promise.resolve(MOCKDATA.mockSummaryData)
); 

export const boxScoresFetch = jest.fn().mockImplementation(() =>
  Promise.resolve(MOCKDATA.mockBoxScoreData)
);

export const teamStatsFetch = jest.fn().mockImplementation(() =>
  Promise.resolve(MOCKDATA.mockTeamStatsData)
);