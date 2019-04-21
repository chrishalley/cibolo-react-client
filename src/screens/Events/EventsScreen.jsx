import React, { Fragment } from 'react';

import { Screen, Card } from '../../components/common';
import Carousel from '../../components/Carousel/Carousel';
import Ball from '../../components/Ball/Ball';

const slides = [
  {
    url: 'https://images.pexels.com/photos/2104140/pexels-photo-2104140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260',
    title: 'Test Event One',
    time: 'Thurs 2nd May | 14:00'
  },
  {
    url: 'https://images.pexels.com/photos/2127465/pexels-photo-2127465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Test Event Two',
    time: 'Thurs 2nd May | 14:00'
  },
  {
    url: 'https://images.pexels.com/photos/2123345/pexels-photo-2123345.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260',
    title: 'Test Event Three',
    time: 'Thurs 2nd May | 14:00'
  },
  {
    url: 'https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260',
    title: 'Test Event Four',
    time: 'Thurs 2nd May | 14:00'
  },
  {
    url: 'https://images.pexels.com/photos/2096609/pexels-photo-2096609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260',
    title: 'Test Event Five',
    time: 'Thurs 2nd May | 14:00'
  }
]

const EventScreen = props => {
  return (
    <Fragment>
      <Carousel maxHeight={600} images={slides}/>
      <Screen>
        <Card>
          <Ball />
        </Card>
      </Screen>
    </Fragment>
  )
}

export default EventScreen;