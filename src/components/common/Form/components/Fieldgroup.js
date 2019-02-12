import React, { Fragment } from 'react'

const Fieldgroup = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      <h3>Fieldgroup</h3>
      { children }
      { flexDirection }
    </div>
  )
}

export { Fieldgroup }