import { gameSummariesFetch, boxScoresFetch, teamStatsFetch } from './ApiCall';
import apiKey from './apiKey';
import { mockBoxScoreData, mockSummaryData, mockTeamStatsData } from '../mockData/mockData';
import { yesterdaysDate } from '../Helpers/dataCleaner';
import { teamEndPoints } from './teamEndPoints';



describe('ApiCall', () => {
  let date;
  describe('gameSummaryFetch', () => {
     beforeEach(() => {
      date = yesterdaysDate();
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockSummaryData)
        })
      );
    });
    it('should be called with the correct params', async () => {
      let url = `http://api.sportradar.us/mlb/trial/v6.5/en/games/${date}/summary.json?api_key=${apiKey}`;
      
      await gameSummariesFetch();

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if status code is ok', async () => {
     await expect(gameSummariesFetch()).resolves.toEqual(mockSummaryData);
    })

    it('should throw an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      await expect(gameSummariesFetch()).rejects.toEqual('Error on the catcher, could\'nt catch the data.')
    })
  })

  describe('boxScoreFetch', () => {
    beforeEach(() => {
      date = yesterdaysDate();

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockBoxScoreData)
        })
      );
    }) 

    it('should called with the correct params', async () => {
      let url = `http://api.sportradar.us/mlb/trial/v6.5/en/games/${date}/boxscore.json?api_key=${apiKey}`;

       await boxScoresFetch();

       expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if status code is ok', async () => {
      await expect(boxScoresFetch()).resolves.toEqual(mockBoxScoreData);
    })

    it('should throw an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      await expect(boxScoresFetch()).rejects.toEqual('Error on the catcher, could\'nt catch the data.')
    })
  })
describe('teamStatsFetch', () => {
  let year;
  let teamId;
  beforeEach(() => {
    year = 2018
    teamId = '80715d0d-0d2a-450f-a970-1b9a3b18c7e7'

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockTeamStatsData)
      })
    );
  })

  it('should called with the correct params', async () => {
    
    let url = `http://api.sportradar.us/mlb/trial/v6.5/en/seasons/${year}/REG/teams/${teamId}/statistics.json?api_key=${apiKey}`;

    await teamStatsFetch();

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return an object if status code is ok', async () => {
    await expect(teamStatsFetch()).resolves.toEqual(mockTeamStatsData);
  })

  it('should throw an error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    );

    await expect(teamStatsFetch()).rejects.toEqual('Error on the catcher, could\'nt catch the data.')
  })
})
})
