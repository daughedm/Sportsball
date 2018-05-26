import apiKey from './apiKey';
import yesterdaysDate from '../Helpers/dataCleaner'

export const gameSummaryFetch = async (selectedTeam) => {
  const url = `http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/05/23/summary.json?api_key=${apiKey}`
  const response = await fetch()
}
