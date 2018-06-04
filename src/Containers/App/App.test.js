import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import { gameSummariesFetch } from '../../ApiCall/ApiCall';

describe('App', () => {
  let wrapper;
  let mockHandleSummaries;
  let mockHandleBoxScores;
  let mockHandleTeamStats;
  let mockProps;
  
  beforeEach(() => {
    mockHandleSummaries = jest.fn();
    mockHandleBoxScores = jest.fn();
    mockHandleTeamStats = jest.fn();
    mockProps = {
      selectedTeam: "Indians"
    }
    wrapper = shallow(<App
      handleSummaries={mockHandleSummaries}
      handleBoxScores={mockHandleBoxScores}
      handleTeamStats={mockHandleTeamStats}
      {...mockProps}
    />, { disableLifeCycleMethods: true });
  });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
    
    describe('getSummaries', () => {
      it('getSummaries should call getSummaries on pageload', async () => {
        await wrapper.instance().getSummaries();

        expect(gameSummariesFetch).toHaveBeenCalled();
      });
    })
})

