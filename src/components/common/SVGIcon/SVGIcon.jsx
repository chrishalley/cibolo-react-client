import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SVGIcon.module.css';

const proptypes = {
  icon: PropTypes.string,
  style: PropTypes.object,
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  icon: 'default',
  strokeWidth: "5",
  width: '40px'
};

const SVGIcon = (props) => {

  const { icon, style, strokeWidth, width, className } = props

  const icons = {
    'arrow-left': {
      viewBox: '-50 -50 100 100',
      svg: 
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 10 0, L -30 0 " />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -10 -20, L -30 0, L -10 20" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 20 0, L 20 0" />
        </Fragment>
    },
    'arrow-right': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -10 0, L 30 0 " />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 10 -20, L 30 0, L 10 20" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -20 0, L -20 0" />
        </Fragment>
    },
    'login': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -20 0, L 15 0 " />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -5 -20, L 15 0, L -5 20" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M -30 0, L -30 0" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M 20 -30, L 30 -30, L 30 30, L 20 30" />
        </Fragment>
    },
    'calendar': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -30 -40, L -40 -40, L -40 40, L 40, 40, L 40, -40, L 30, -40" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -10 -40, L 10 -40" />
          </g>
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -20 -45, L -20 -35" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 20 -45, L 20 -35" />
          </g>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -30 -25, L 30, -25" />
          <g>
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -20 -15, L -20 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 0 -15, L 0 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 20 -15, L 20 30" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -30 -5, L 30, -5" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -30 10, L 30, 10" />
            <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -30 25, L 30, 25" />
          </g>
        </Fragment>
    },
    'person': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -20 12, L-20 40, L 20 40, L 20 12" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M -20 12, L -20 30, L -30 30, L -30 12, Z" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 20 12, L 20 30, L 30 30, L 30 12, Z" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 0 20, L 0 40" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 0 40, L 25 40" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" d="M 0 40, L -25 40" />
          <circle fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} cx="0" cy="-10" r="30"></circle>
        </Fragment>
    },
    'close': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M -40 -40, L 40, 40"/>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M 40 -40, L -40, 40"/>
        </Fragment>
    },
    'menu': {
      viewBox: '-50 -50 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M -40 -30, L 40, -30" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M -40 0, L 40, 0" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M -40 30, L 40, 30" />
        </Fragment>
    },
    'deskbell': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <rect fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" x="10" y="75.00002" width="80" height="10"/>
          <polyline fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" points="55,22.5 60,22.5 60,12.5 40,12.5 40,22.5 
	          44.99619,22.48595"
          />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M85,64.98664c0-15.85973-10.54923-29.25556-25.01358-33.55335
	          C56.82065,30.49316,53.46927,29.98838,50,29.98838c-3.48071,0-6.84274,0.50812-10.01597,1.45423
	          c-14.44826,4.3078-24.98229,17.69574-24.98229,33.54404H84.99826z"
          />
        </Fragment>
    },
    'document-approved': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M80 55, L80 10, L20 10, L20 90, L80 90, L80 85" />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M 30 25, L70 25," />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M 30 40, L70 40," />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M 30 55, L70 55," />
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M 30 70, L45 70," />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" d="M60 70, L70 80, L90 60" />
        </Fragment>
    },
    'eye': {
      viewBox: '0 0 100 100',
      svg: 
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M10 50, C25 20, 75 20, 90 50, C75 80, 25 80, 10 50" />
          <circle fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} cx="50" cy="50" r="20" />
          <circle fill="currentColor" cx="50" cy="50" r="7.5" />
        </Fragment>
    },
    'pen': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M80 10, L10 80, L10 90, L20 90, L90 20 Z" />
          <path stroke="currentColor" strokeWidth={strokeWidth} d="M70 20, L80 30" />
          <path stroke="currentColor" strokeWidth={strokeWidth} d="M75 15, L85 25" />
          <path stroke="currentColor" strokeWidth={strokeWidth} d="M15 75, L25 85" />
        </Fragment>
    },
    'tools': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="transparent" d="M36.21778,74.38882l38.17103-38.17103c5.00965,1.33791,10.57367,0.05554,14.50385-3.87463
            s5.21254-9.4942,3.87463-14.50385l-9.17975,9.17974l-10.6066-10.6066l9.17974-9.17974
            c-5.00965-1.33791-10.57367-0.05554-14.50385,3.87463s-5.21254,9.49419-3.87463,14.50385L25.61118,63.78222
            c-5.00965-1.33791-10.57367-0.05554-14.50385,3.87463S5.8948,77.15104,7.23271,82.16069l9.17974-9.17974l10.6066,10.6066
            l-9.17974,9.17975c5.00965,1.33791,10.57367,0.05554,14.50385-3.87463S37.55569,79.39847,36.21778,74.38882z"/>
          <rect stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" x="-110" y="75.00002" width="80" height="10"/>
          <polyline stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" points="-65.00381,22.48595 -60.00381,22.48595 -60.00381,12.48598 -80.00381,12.48598 -80.00381,22.48595 
            -75.00381,22.48595 "/>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" d="M-35.00174,64.98664c0-15.85973-10.54924-29.25556-25.01358-33.55335
            c-3.16404-0.94013-6.51541-1.44491-9.98468-1.44491c-3.48071,0-6.84274,0.50812-10.01597,1.45423
            c-14.44827,4.3078-24.98229,17.69574-24.98229,33.54404H-35.00174z"/>
          <g>
            <polyline stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" points="48.22598,41.16744 16.89533,9.8368 9.03237,9.0449 9.82426,16.90786 41.00829,48.09189 	"/>
            <polyline stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" points="62.38066,48.22599 90.96764,76.81297 76.8255,90.9551 48.23848,62.36809 	"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="69.15845" y1="83.28806" x2="83.30059" y2="69.14593"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="73.17538" y1="78.1126" x2="58.11221" y2="63.04943"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="78.12513" y1="73.16285" x2="63.06196" y2="58.09968"/>
          </g>
          <path stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" d="M36.21778-32.45735l38.17103-38.17104c5.00965,1.33791,10.57367,0.05554,14.50385-3.87463
            c3.93018-3.93018,5.21254-9.49419,3.87463-14.50385l-9.17975,9.17974l-10.6066-10.60661l9.17974-9.17974
            c-5.00965-1.33791-10.57367-0.05554-14.50385,3.87463c-3.93017,3.93018-5.21254,9.4942-3.87463,14.50385L25.61118-43.06395
            c-5.00965-1.33791-10.57367-0.05555-14.50385,3.87463S5.8948-29.69513,7.23271-24.68548l9.17974-9.17974l10.6066,10.6066
            l-9.17974,9.17974c5.00965,1.33791,10.57367,0.05554,14.50385-3.87463S37.55569-27.4477,36.21778-32.45735z"/>
          <g>
            <polygon stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" points="51.46828,-62.43642 16.89533,-97.00938 9.03237,-97.80127 9.82426,-89.93831 44.39722,-55.36536 	"/>
            <rect stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"fill="transparent" x="55.92092" y="-66.35919" transform="matrix(0.70711 -0.70711 0.70711 0.70711 48.25518 34.62273)" width="20" height="50.84282"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="69.15845" y1="-23.55811" x2="83.30059" y2="-37.70024"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="73.17538" y1="-28.73357" x2="58.11221" y2="-43.79674"/>
            <line stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"x1="78.12513" y1="-33.68332" x2="63.06196" y2="-48.74649"/>
          </g>
        </Fragment>
    },
    'logout': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M75 30, L75 10, L25 10, L25 90, L75 90, L75 70 " />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M60 50, L90 50" />
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M80 40, L90 50, L80 60" />
          <circle fill="currentColor" cx="40" cy="50" r="2.5" />
          <circle fill="currentColor" cx="50" cy="50" r="2.5" />
        </Fragment>
    },
    'add': {
      viewBox: '0 0 100 100',
      svg:
        <Fragment>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M50 10, 50, 90"/>
          <path fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" d="M10 50, 90, 50"/>
        </Fragment>
    }
  }

  return (
  <svg width={width} style={style} className={`${styles.icon} svg-icon ${className}`} viewBox={icons[icon].viewBox || '0 0 100 100'}>
      {icons[icon].svg}
  </svg >
  )
};

SVGIcon.propTypes = proptypes;
SVGIcon.defaultProps = defaultProps;

export { SVGIcon };