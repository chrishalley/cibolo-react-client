import React from 'react'

import { Button } from '../../../../'

const Submit = (props) => {
  const { children } = props
  return (
    <Button data-testid="submit" clickHandler={null}>{children}</Button>
  )
}

export { Submit }