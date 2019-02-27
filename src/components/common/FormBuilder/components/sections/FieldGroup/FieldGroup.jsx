import React from 'react'

const FieldGroup = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      { children }
    </div>
  )
}

export { FieldGroup }