import React from 'react';
import { shallow } from 'enzyme';

import { Chip } from './Chip';

describe('Chip', () => {

  const wrapper = shallow(<Chip />);
  it('should render', () => {
    expect(wrapper.find('[data-test="chip"]').length).toEqual(1);
  });
});