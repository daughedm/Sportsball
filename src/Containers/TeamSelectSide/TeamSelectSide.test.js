import {TeamSelectSide, mapDispatchToProps, mapStateToProps} from './TeamSelectSide';
import React from 'react';
import { shallow } from 'enzyme';
import { teamStatsFetch } from './../../ApiCall/ApiCall';


jest.mock('./../../apiCall/apiCall');

describe('TeamSelectSide', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TeamSelectSide/>);
  });
  
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});