import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SVGIcon.module.css';

const proptypes = {
  icon: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  icon: 'default'
};

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
    'deskbell': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <rect fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" x="10" y="75.00002" width="80" height="10"/>
          <polyline fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" points="55,22.5 60,22.5 60,12.5 40,12.5 40,22.5 
	          44.99619,22.48595"
          />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M85,64.98664c0-15.85973-10.54923-29.25556-25.01358-33.55335
	          C56.82065,30.49316,53.46927,29.98838,50,29.98838c-3.48071,0-6.84274,0.50812-10.01597,1.45423
	          c-14.44826,4.3078-24.98229,17.69574-24.98229,33.54404H84.99826z"
          />
        </Fragment>
    },
    'document-approved': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M80 55, L80 10, L20 10, L20 90, L80 90, L80 85" />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M 30 25, L70 25," />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M 30 40, L70 40," />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M 30 55, L70 55," />
          <path stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M 30 70, L45 70," />
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" d="M60 70, L70 80, L90 60" />
        </Fragment>
    },
    'eye': {
      viewBox: '0 0 100 100',
      svg: 
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M10 50, C25 20, 75 20, 90 50, C75 80, 25 80, 10 50" />
          <circle fill="transparent" stroke="currentColor" strokeWidth="5" cx="50" cy="50" r="20" />
          <circle fill="currentColor" cx="50" cy="50" r="7.5" />
        </Fragment>
    },
    'pen': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M80 10, L10 80, L10 90, L20 90, L90 20 Z" />
          <path stroke="currentColor" strokeWidth="5" d="M70 20, L80 30" />
          <path stroke="currentColor" strokeWidth="5" d="M75 15, L85 25" />
          <path stroke="currentColor" strokeWidth="5" d="M15 75, L25 85" />
        </Fragment>
    }
  }

  return (
  <svg style={style} className={`${styles.icon} svg-icon`} viewBox={icons[icon].viewBox || '0 0 100 100'}>
      {icons[icon].svg}
  </svg >
  )
};

SVGIcon.propTypes = proptypes;
SVGIcon.defaultProps = defaultProps;

export { SVGIcon };