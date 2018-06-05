import {
  TeamSelect,
  mapDispatchToProps,
  mapStateToProps
} from './TeamSelect';
import React from 'react';
import { shallow } from 'enzyme';
import { teamStatsFetch } from './../../ApiCall/ApiCall';


jest.mock('./../../apiCall/apiCall');

describe('TeamSelect', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < TeamSelect / > );
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});