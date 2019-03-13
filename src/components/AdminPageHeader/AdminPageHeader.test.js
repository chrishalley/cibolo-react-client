import React from 'react';
import { mount, shallow } from 'enzyme';

import AdminPageHeader from './AdminPageHeader';

const testContent = 'This is some test content';
const wrapper = shallow(<AdminPageHeader title={testContent} />);

describe('AdminPageHeader', () => {

  it('should render containing title text', () => {
    expect(wrapper.text()).toMatch(testContent);
  });

  it('should render containing a single <hr>', () => {
    expect(wrapper.find('hr').length).toEqual(1);
  });
});