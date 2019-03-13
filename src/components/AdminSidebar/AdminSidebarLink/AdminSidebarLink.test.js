import React from 'react';
import { shallow, mount } from 'enzyme';

import AdminSidebarLink from './AdminSidebarLink';
import { BrowserRouter as Router } from 'react-router-dom';

const testContent = 'TestPage';

describe('AdminSidebarLink', () => {
  it('should render a single <a> tag with href equal to "to" prop', () => {
    const wrapper = mount(
      <Router>
        <AdminSidebarLink label={testContent} to="/test-page">{testContent}</AdminSidebarLink>
      </Router>
    );
    expect(wrapper.find('a').length).toEqual(1);
  });
});