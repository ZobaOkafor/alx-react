import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test" isHeader={false} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('applies correct style for header rows', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Header" isHeader={true} />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies correct style for regular rows', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Regular" isHeader={false} />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
