import React from 'react'

const Section = ({ children, flexDirection='column' }) => {
  return (
    <div style={{ display: 'flex', flexDirection }}>
      { children }
    </div>
  )
}

export { Section }