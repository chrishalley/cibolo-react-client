import React from 'react'

const FormSection = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      { children }
    </div>
  )
}

export { FormSection }