import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
  mapDispatchToProps,
  mapStateToProps
} from './App';
import { shallow } from "enzyme";
import { gameSummariesFetch, boxScoresFetch } from '../../ApiCall/ApiCall';
import {
  mockCleanSummaries,
  mockCleanTeamStats,
  mockedCleanBoxScores
} from './../../mockData/mockCleanData';

jest.mock('./../../ApiCall/ApiCall.js');



describe('App', () => {
  let wrapper;
  let mockHandleSummaries;
  let mockHandleBoxScores;
  let mockHandleTeamStats;
  let mockProps;
  let wrapperInst;

  beforeEach(() => {

      mockHandleSummaries = jest.fn();
      mockHandleBoxScores = jest.fn();
      mockHandleTeamStats = jest.fn();
      mockProps = {
        selectedTeam: "Indians"
      }
      wrapper = shallow( < App handleSummaries = {
          mockHandleSummaries
        }
        handleBoxScores = {
          mockHandleBoxScores
        }
        handleTeamStats = {
          mockHandleTeamStats
        } { ...mockProps
        }
        />, { disableLifeCycleMethods: true });

        wrapperInst = wrapper.instance();
        wrapperInst.gameSummariesFetch = jest.fn();
        // wrapperInst.boxScoresFetch = jest.fn();
      }); it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

  describe('getSummaries', () => {
    it('getSummaries should call getSummaries on pageload', async () => {
      await wrapper.instance().getSummaries();

      expect(gameSummariesFetch).toHaveBeenCalled();
    });
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch on handleSummaries with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_SUMMARIES',
        summaries: mockCleanSummaries
      };
      mappedProps.handleSummaries(mockCleanSummaries);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch on handleBoxScores with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_BOXSCORES',
        boxScores: mockedCleanBoxScores
      };
      mappedProps.handleBoxScores(mockedCleanBoxScores);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch on handleTeamStats with the correct params', () => {
    
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_TEAM_STATS',
        teamStats: mockCleanTeamStats
      };
      mappedProps.handleTeamStats(mockCleanTeamStats);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  })
})