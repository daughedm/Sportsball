import * as actions from './userActions';

describe('userActions', () => {
  describe('addSelectedTeamToStore', () => {
    it('has a type of ADD_SUMMARIES', () => {
      
      const teamData = 'Indians';
      const actual = actions.addSelectedTeamToStore(teamData);

      expect(actual).toEqual({
        type: 'ADD_SELECTED_TEAM',
        team: teamData
      });
    });
  });
});