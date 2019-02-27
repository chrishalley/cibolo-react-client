import React from 'react'

import { Button } from '../../../../'

const Submit = (props) => {
  const { children } = props
  return (
    <Button clickHandler={null}>{children}</Button>
  )
}

export { Submit }