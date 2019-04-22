import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  event: PropTypes.object
}

const defaultProps = {

}

const EventDetails = props => {

  const { event } = props;

  return (
    <div>
      <h3>{event.title}</h3>
    </div>
  )
}

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default EventDetails;