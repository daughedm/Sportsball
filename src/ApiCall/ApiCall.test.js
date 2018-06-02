import { gameSummariesFetch, boxScoresFetch } from './ApiCall';
import apiKey from './apiKey';
import { mockBoxScoreData, mockSummaryData } from '../mockData/mockData';
import { yesterdaysDate } from '../Helpers/dataCleaner';



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
})
