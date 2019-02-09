import React from 'react'

import FormSectionGroupFieldset from './Fieldset/Fieldset'

const FormSectionGroup = ({ groupConfig }) => {
  console.log('groupProps: ', groupConfig)
  const { fieldsets } = groupConfig 
  const renderFieldsets = () => {
    return fieldsets.map(fieldset => {
      return <FormSectionGroupFieldset fieldsetConfig={fieldset} key={fieldset.id}></FormSectionGroupFieldset>
    })
  }

  return (
    <div>
      {renderFieldsets()}
    </div>
  )
}

export default FormSectionGroup