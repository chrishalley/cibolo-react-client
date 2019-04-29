import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './EventsByMonth.module.css';
import { Card, PrimaryButton, SVGIcon } from '../../components/common';

const propTypes = {
  pastEvents: PropTypes.bool,
  events: PropTypes.array
}

const defaultProps = {
  pastEvents: false,
  events: []
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const FittedImage = props => {
  const { src, alt, ...restProps } = props;

  const imgWrapperRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    let { offsetWidth: parentOffsetWidth, offsetHeight: parentOffsetHeight } = imgWrapperRef.current;
    const parentRatio = parentOffsetHeight / parentOffsetWidth;
    imgRef.current.onload = () => {
      const imgRatio = imgRef.current.height / imgRef.current.width;
      // If difference between parentRatio and imgRatio is positive, image must be height 100%, else width 100%
      // console.log('parentRatio:', parentRatio);
      // console.log('imgRatio:', imgRatio);
      if (parentRatio - imgRatio > 0) {
        imgRef.current.style.height = '100%';
        imgRef.current.style.width = 'auto';
      } else {
        imgRef.current.style.height = 'auto';
        imgRef.current.style.width = '100%';
      }
    }
    imgRef.current.onload();
  }, [src])

  return (
    <div ref={imgWrapperRef} {...restProps}>
      <img ref={imgRef} style={{position: 'absolute', width: '100%'}} src={src} alt={alt}/>
    </div>
  )
}

const EventsList = props => {

  const { events, viewEvent } = props;

  if (events.length > 0) {
    return events.map(event => {

      return (
        <Card key={event.startDateTime} style={{display: 'flex', flexDirection: 'row', padding: '0', border: '2px solid #FFFFFF', overflow: 'hidden'}}>
          
          <FittedImage src={event.imgUrl} alt={event.title} style={{width: '20rem', flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden'}}/>

          <div style={{marginLeft: '2rem', padding: '2rem'}}>
            <h3 style={{color: 'var(--color-primary)'}}>{event.title}</h3>
            <p style={{whiteSpace: 'pre-wrap'}}>{event.description}</p>
            <p>{event.startDateTime} - {event.endDateTime}</p>
            <button onClick={() => viewEvent(event)}>View</button>
          </div>
        </Card>
      )
    })
  } else {
    return (
      <p>There are currently no events scheduled for this month.</p>
    )
  }
}

const EventsByMonth = props => {
  const { events, viewEvent, pastEvents } = props;

  const getMonthDetails = (timestamp) => {
    const date = new Date(timestamp);
    const monthIndex = date.getMonth();
    const fullYear = date.getFullYear();
    const startTimeStamp = new Date(fullYear, monthIndex, 1).getTime();
    const endTimeStamp = new Date(fullYear, monthIndex + 1, 1).getTime() - 1;
    const currentMonthString = `${months[monthIndex]} ${fullYear}`
    return {startTimeStamp, endTimeStamp, currentMonthString};
  };

  const changeMonth = (step) => {
    const date = new Date(state.startTimeStamp);
    const monthIndex = date.getMonth();
    const fullYear = date.getFullYear();
    const nextMonth = new Date(fullYear, monthIndex + step, 1).getTime();

    // Prevent users from looking into previous months
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const startOfCurrentMonth = new Date(currentYear, currentMonth, 1).getTime();
    if (!pastEvents && nextMonth < startOfCurrentMonth) return
    setState({...state, ...getMonthDetails(nextMonth)});
  }

  const [state, setState] = useState({});

  useEffect(() => {
    const currentTimeStamp = new Date().getTime();
    setState({ ...state, ...getMonthDetails(currentTimeStamp) })
  }, [])

  const getMonthEvents = (eventArray) => {
    return eventArray.filter(event => {
      return event.startDateTime > state.startTimeStamp && event.startDateTime < state.endTimeStamp;
    });
  }

  return (
    <div className={styles['events-by-month']} data-testid="eventsByMonth">
      <div className={styles['controller']}>
        <PrimaryButton className={styles['controller-button']} data-testid="prevButton" onClick={() => changeMonth(-1)}><SVGIcon icon="arrow-left"/></PrimaryButton>
        <h4>{state.currentMonthString}</h4>
        <PrimaryButton className={styles['controller-button']} data-testid="nextButton" onClick={() => changeMonth(1)}><SVGIcon icon="arrow-right"/></PrimaryButton>
      </div>
      <EventsList events={getMonthEvents(events)} viewEvent={viewEvent}/>
    </div>
  )
}

EventsByMonth.propTypes = propTypes;
EventsByMonth.defaultProps = defaultProps;

export default React.memo(EventsByMonth);