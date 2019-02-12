import React from 'react'

const Fieldgroup = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      { children }
    </div>
  )
}

export { Fieldgroup }