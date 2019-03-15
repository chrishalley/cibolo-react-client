import React from 'react';
import { shallow } from 'enzyme';

import { AddFile } from './AddFile';

describe('AddFile', () => {

  const wrapper = shallow(<AddFile />);
  it('should render', () => {
    expect(wrapper.find('[data-test="addFile"]').length).toEqual(1);
  });
});