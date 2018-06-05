import { Main, mapStateToProps } from './Main';
import React from 'react';
import { shallow } from 'enzyme';
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

describe('Main',() => {
  let wrapper;
  let mockSelectedTeam;
  let mockSingleGameSummary;
  let mockSingleBoxScore;
  let mockTeamStats;
  
  beforeEach(() => {
    mockSelectedTeam = 'Indians';
    mockSingleGameSummary = mockCleanSummary;
    mockSingleBoxScore = mockCleanBoxScores;
    mockTeamStats= mockCleanTeamStats;
    
    wrapper = shallow(<Main 
      selectedTeam={ mockSelectedTeam }
      singleGameSummary={ mockSingleGameSummary }
      singleBoxScore={ mockSingleBoxScore }
      teamStats={ mockTeamStats }
                      /> );
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});