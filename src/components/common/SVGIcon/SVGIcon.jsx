import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const proptypes = {
  icon: PropTypes.string,
  style: PropTypes.object
}

const defaultProps = {
  icon: 'default'
}

const SVGIcon = (props) => {

  const { icon, style } = props

  const icons = {
    'arrow-left': {
      viewBox: '-50 -50 100 100',
      svg: 
        <Fragment>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 10 0, L -30 0 " />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -10 -20, L -30 0, L -10 20" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 20 0, L 20 0" />
        </Fragment>
    },
    'arrow-right': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -10 0, L 30 0 " />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 10 -20, L 30 0, L 10 20" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -20 0, L -20 0" />
        </Fragment>
    },
    'login': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -20 0, L 15 0 " />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -5 -20, L 15 0, L -5 20" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -30 0, L -30 0" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 20 -30, L 30 -30, L 30 30, L 20 30" />
        </Fragment>
    },
    'calendar': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -30 -40, L -40 -40, L -40 40, L 40, 40, L 40, -40, L 30, -40" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -10 -40, L 10 -40" />
          </g>
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -20 -45, L -20 -35" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 20 -45, L 20 -35" />
          </g>
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -30 -25, L 30, -25" />
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -20 -15, L -20 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 0 -15, L 0 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 20 -15, L 20 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -30 -5, L 30, -5" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -30 10, L 30, 10" />
            <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -30 25, L 30, 25" />
          </g>
        </Fragment>
    },
    'person': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -20 12, L-20 40, L 20 40, L 20 12" />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M -20 12, L -20 30, L -30 30, L -30 12, Z" />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 20 12, L 20 30, L 30 30, L 30 12, Z" />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 0 20, L 0 40" />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 0 40, L 25 40" />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" d="M 0 40, L -25 40" />
          <circle fill="transparent" stroke="currentColor" strokeWidth="5" cx="0" cy="-10" r="30"></circle>
        </Fragment>
    },
    'close': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M -40 -40, L 40, 40"/>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M 40 -40, L -40, 40"/>
        </Fragment>
    },
    'menu': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M -40 -30, L 40, -30" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M -40 0, L 40, 0" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M -40 30, L 40, 30" />
        </Fragment>
    },

  }

  return (
  <svg style={style} className="svg-icon" viewBox={icons[icon].viewBox || '0 0 100 100'}>
      {icons[icon].svg}
  </svg >
  )
}

SVGIcon.propTypes = proptypes
SVGIcon.defaultProps = defaultProps

export { SVGIcon }