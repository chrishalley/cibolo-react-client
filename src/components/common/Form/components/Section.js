import React, { Fragment } from 'react'

const Section = ({ children }) => {
  return (
    <Fragment>
      <h2>Section</h2>
      { children }
    </Fragment>
  )
}

export { Section }