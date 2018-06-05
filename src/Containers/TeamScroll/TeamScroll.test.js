import {
  TeamScroll,
  mapDispatchToProps,
  mapStateToProps
} from "./TeamScroll";
import React from "react";
import { shallow } from "enzyme";
import { teamStatsFetch } from "./../../ApiCall/ApiCall";
import {connect} from 'react-redux';
import {
  mockCleanSummary,
  mockCleanTeamStats,
  mockCleanBoxScores
} from './../../mockData/mockCleanData';

jest.mock('./../../ApiCall/ApiCall');

describe('TeamScroll', () => {
  let wrapper;
  let mockHandleTeamSelect;
  let mockHandleGameSummary;
  let mockHandleBoxScore;
  let mockHandleTeamStats;
  let mockProps;

  beforeEach(() => {
    mockHandleTeamSelect = jest.fn();
    mockHandleGameSummary = jest.fn();
    mockHandleBoxScore = jest.fn();
    mockHandleTeamStats = jest.fn();
    mockProps = {
         selectedTeam: "Indians",
         gameSummaries: [],
         boxScores: []
       }
    
    wrapper = shallow( <TeamScroll 
      handleTeamSelect={mockHandleTeamSelect}
      handleGameSummary={mockHandleGameSummary}
      handleBoxScore={mockHandleBoxScore}
      handleTeamStats={mockHandleTeamStats}
      {...mockProps}
    /> );
  })


  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a default state", () => {
    let expected = {
      teamClicked: ""
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('handleTeamSubmit', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = {
        preventDefault: jest.fn()
      }
    });

    it('should call handleTeamSelect', async () => {
      wrapper.setState({
        teamClicked: 'papayas'
      });
      await wrapper.instance().handleTeamSubmit(mockEvent);

      expect(mockHandleTeamSelect).toHaveBeenCalledWith('papayas');
    })

    it('should call handleBoxScore', async () => {
      await wrapper.instance().handleTeamSubmit(mockEvent);

      expect(mockHandleBoxScore).toHaveBeenCalled();
    })

    it('should call handleGameSummary', async () => {
      await wrapper.instance().handleTeamSubmit(mockEvent);

      expect(mockHandleGameSummary).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    it('should map the user to props', () => {
      const mockState = {
        selectedTeam: 'Indians'
      };

      const expected = {
        selectedTeam: 'Indians'
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch on handleGameSummary with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_SINGLE_SUMMARY',
        summary: mockCleanSummary
      };
      mappedProps.handleGameSummary(mockCleanSummary);

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

    it('should call dispatch on handleBoxScore with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_SINGLE_BOXSCORE',
        boxScore: mockCleanBoxScores
      };
      mappedProps.handleBoxScore(mockCleanBoxScores);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch on handleTeamSelect with the correct params', () => {
      const mockTeam = 'Indians'
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_SELECTED_TEAM',
        team: mockTeam
      };
      mappedProps.handleTeamSelect(mockTeam);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
})