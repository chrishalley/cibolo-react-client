import React from 'react';
import PropTypes from 'prop-types';
import { FittedImage } from '../common';

import styles from './EventDetails.module.css';

const propTypes = {
  event: PropTypes.object
}

const defaultProps = {

}

const EventDetails = ({
  event
}) => (
  <div className={styles['event-details']}>
    <FittedImage className={styles['event-details__image']} src={event.imgUrl} alt='Random alt text'/>
    <p className={styles['event-details__time']}>Time: {event.startDateTime} - {event.endDateTime}</p>
    <p className={styles['event-details__description']}>
      {event.description}
    </p>
  </div>
)

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default EventDetails;