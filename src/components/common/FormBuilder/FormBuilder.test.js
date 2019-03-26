import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { FormBuilder } from './FormBuilder';
afterEach(cleanup);

const setup = (props) => {
  return render(<FormBuilder {...props} />)
}

describe('FormBuilder basic', () => {
  const form = [
    {
      component: 'Fieldset',
      props: {
        name: 'fieldsetOne',
        label: 'Fieldset one',
        component: 'TextInput'
      }
    },
    {
      component: 'Fieldset',
      props: {
        name: 'fieldsetTwo',
        label: 'Fieldset two',
        component: 'TextInput'
      }
    }
  ];  

  it('should render', () => {
    const { getByTestId } = setup({ form: form });
    expect(getByTestId('formBuilder')).toBeInTheDocument();
  });

  it('should render the same number of fieldsets passed to it in form prop', () => {
    const { getAllByTestId } = setup({ form: form });
    expect(getAllByTestId('fieldset')).toHaveLength(2);
  });

  it('should not render the debug panel if debug prop is not passed', () => {
    let { queryByTestId } = setup({ form: form });
    expect(queryByTestId('debug')).toBeNull();
  });

  it('should render the debug panel if debug prop is passed', () => {
    let { queryByTestId } = setup({ form: form, debug: true });
    expect(queryByTestId('debug')).toBeInTheDocument();
  });
});

describe('Nested SandboxForm', () => {
  const form = [
    {
      component: 'FormSection',
      props: {
        flexDirection: 'row',
        children: [
          {
            component: 'FieldGroup',
            props: {
              flexDirection: 'column',
              children: [
                {
                  component: 'Fieldset',
                  props: {
                    name: 'fieldsetOne',
                    label: 'Fieldset one',
                    component: 'TextInput'
                  }
                },
                {
                  component: 'Fieldset',
                  props: {
                    name: 'fieldsetTwo',
                    label: 'Fieldset two',
                    component: 'TextInput'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ];

  it('should render two Fieldsets, a FieldGroup and a FormSection', () => {
    let { queryAllByTestId } = setup({ form: form });
    expect(queryAllByTestId('formSection')).toHaveLength(1);
    expect(queryAllByTestId('fieldGroup')).toHaveLength(1);
    expect(queryAllByTestId('fieldset')).toHaveLength(2);
  })
})

describe('disabled form', () => {
  const form = [
    {
      component: 'Fieldset',
      props: {
        component: 'TextInput',
        label: 'Disabled input',
        name: 'disabledInput',
        defaultValue: 'Disabled Input'
      }
    }
  ]

  it('should not render input fields when the disabled prop is passed', () => {
    let { queryByTestId } = setup({ form: form, disabled: true});
    expect(queryByTestId('input')).toBeNull();
  });

  it('should render a <p> tag with the defaultValue inside', () => {
    let { getByTestId } = setup({ form: form, disabled: true });
    expect(getByTestId('disabledField')).toHaveTextContent('Disabled Input');
  })
});

describe('Form builder integration', () => {
  const form = [
    {
      component: 'Fieldset',
      props: {
        component: 'TextInput',
        label: 'Text Input',
        name: 'textinput',
        defaultValue: 'Default input text'
      }
    },
    {
      component: 'Fieldset',
      props: {
        component: 'TextArea',
        label: 'Text Area',
        name: 'textarea',
        defaultValue: 'Default textarea text'
      }
    }
  ]

  it('should render all types of inputs', () => {
    const { queryByTestId, getByTestId } = setup({ form: form, debug: true });
    expect(queryByTestId('textInput')).toBeInTheDocument();
    expect(queryByTestId('textArea')).toBeInTheDocument();
  })
})

  
