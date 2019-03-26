import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Fieldset } from './Fieldset';
import { TextInput } from '../../inputs/TextInput/TextInput';

afterEach(cleanup);

const renderTest = (props) => {
  return render(<Fieldset {...props} />);
}
describe('Fieldset', () => {
  it('should render', () => {
    
  });
});