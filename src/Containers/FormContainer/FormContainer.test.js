import { FormContainer, mapStateToProps } from "./FormContainer";
import React from "react";
import { shallow } from "enzyme";
import { connect } from 'react-redux';
import { yesterdaysDate } from '../../Helpers/dataCleaner';
import { winningMessages, losingMessages } from '../../Helpers/talkingPointPhrases';
import { firstTalkingPoint, secondTalkingPoint, thirdTalkingPoint } from '../../Helpers/talkingPointLogic';
import TeamSelectSide from '../TeamSelectSide/TeamSelectSide';
import {
  mockCleanSummary,
  mockCleanBoxScores,
  mockCleanTeamStats
} from './../../mockData/mockCleanData';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

describe('FormContainer',() => {
  let wrapper;
  let mockSingleGameSummary;
  let mockSingleBoxScore;
  
  beforeEach(() => {
    mockSingleGameSummary = mockCleanSummary;
    mockSingleBoxScore = mockCleanBoxScores;
    
    wrapper = shallow(<FormContainer 
      gameSummaries={mockSingleGameSummary}
      boxScores={mockSingleBoxScore}
    /> );
  })


  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})