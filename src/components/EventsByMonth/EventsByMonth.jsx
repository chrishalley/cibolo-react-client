import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {

}

const defaultProps = {

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

const EventsByMonth = props => {

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

    setState({...state, ...getMonthDetails(nextMonth)});
  }

  const [state, setState] = useState({});

  useEffect(() => {
    const currentTimeStamp = new Date().getTime();
    setState({ ...state, ...getMonthDetails(currentTimeStamp) })
  }, [])

  return (
    <div data-testid="eventsByMonth">
      <div>
        <button data-testid="prevButton" onClick={() => changeMonth(-1)}>prev</button>
        <h4>{state.currentMonthString}</h4>
        <button data-testid="nextButton" onClick={() => changeMonth(1)}>next</button>
      </div>
    </div>
  )
}

EventsByMonth.propTypes = propTypes;
EventsByMonth.defaultProps = defaultProps;

export default EventsByMonth;