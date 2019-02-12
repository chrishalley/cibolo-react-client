import React, { Fragment } from 'react'

const Section = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      <h2>Section</h2>
      { children }
    </div>
  )
}

export { Section }