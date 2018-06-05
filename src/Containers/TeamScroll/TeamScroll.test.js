import {
  TeamScroll,
  mapDispatchToProps,
  mapStateToProps
} from "./TeamScroll";
import React from "react";
import { shallow } from "enzyme";
import { teamStatsFetch } from "./../../ApiCall/ApiCall";
import {connect} from 'react-redux';


jest.mock('./../../apiCall/apiCall');

describe('TeamScroll', () => {
  let wrapper;
  let mockHandleTeamSelect;
  let mockHandleGameSummary;
  let mockHandleBoxScores;
  let mockHandleTeamStats;
  let mockProps;
  beforeEach(() => {
    mockHandleTeamSelect = jest.fn();
    mockHandleGameSummary = jest.fn();
    mockHandleBoxScores = jest.fn();
    mockHandleTeamStats = jest.fn();
    mockProps = {
         selectedTeam: "Indians",
         gameSummaries: [],
         boxScores: []
       }
    
    wrapper = shallow( <TeamScroll 
      handleTeamSelect={mockHandleTeamSelect}
      handleGameSummary={mockHandleGameSummary}
      handleBoxScores={mockHandleBoxScores}
      handleTeamStats = {mockHandleTeamStats}
      {...mockProps}
    /> );
  })


  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})