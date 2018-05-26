import { gameSummaryFetch, boxScoreFetch } from './ApiCall';
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
      
      await gameSummaryFetch();

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if status code is ok', async () => {
     await expect(gameSummaryFetch()).resolves.toEqual(mockSummaryData);
    })

    it('should throw an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      await expect(gameSummaryFetch()).rejects.toEqual('Error on the catcher, could\'nt catch the data.')
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

       await boxScoreFetch();

       expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if status code is ok', async () => {
      await expect(boxScoreFetch()).resolves.toEqual(mockBoxScoreData);
    })

    it('should throw an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      await expect(boxScoreFetch()).rejects.toEqual('Error on the catcher, could\'nt catch the data.')
    })
  })
})
