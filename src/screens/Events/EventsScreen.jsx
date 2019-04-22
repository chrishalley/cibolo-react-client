import React, { Fragment, useState } from 'react';

import { Screen, Card, Modal, PrimaryButton } from '../../components/common';
import Carousel from '../../components/Carousel/Carousel';
import EventsByMonth from '../../components/EventsByMonth/EventsByMonth';
import BookingForm from '../../components/BookingForm/BookingForm';
import EventDetails from '../../components/EventDetails/EventDetails';
import events from '../../components/EventsByMonth/events';

const EventScreen = props => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(BookingForm);

  const carouselEvents = events.sort((a, b) => {
    if (a.startDateTime < b.startDateTime) {
      return - 1;
    } else if (a.startDateTime > b.startDateTime) {
      return 1;
    }
    return 0;
  }).slice(0, 5);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const viewEvent = event => {
    setModalContent(<EventDetails event={event}/>);
    toggleModal();
  };

  const viewBookingForm = () => {
    setModalContent(<BookingForm />);
    toggleModal();
  }

  return (
    <Fragment>
      <Carousel maxHeight={600} images={carouselEvents}/>
      <Screen>
        <div style={{display: 'flex'}}>
          <div style={{flex: '2 0'}}>
            <EventsByMonth viewEvent={(event) => viewEvent(event)} events={events}/>
          </div>
          <Card style={{display: 'flex', flexDirection: 'column', flex: '1 0', marginLeft: '3rem', alignSelf: 'flex-start'}}>
            <h3>Hire our space!</h3>
            <p>Marshmallow pie candy. Sugar plum liquorice oat cake. Pastry candy canes carrot cake gummies chocolate cake ice cream cake. Carrot cake halvah marshmallow danish cheesecake fruitcake.</p>
            <p>Fruitcake carrot cake sugar plum lollipop. Gingerbread cake dragée marshmallow liquorice biscuit pie topping. Liquorice croissant bear claw sweet roll. Topping sweet bonbon pie jelly muffin jelly candy canes.</p>
            <p>Gingerbread tart muffin fruitcake jujubes oat cake. Cake pastry chocolate bar lemon drops toffee pudding. Brownie wafer bear claw lemon drops bonbon bear claw biscuit icing.</p>
            <PrimaryButton style={{alignSelf: 'center', padding: '2rem'}} onClick={viewBookingForm}>Request a booking</PrimaryButton>
          </Card>
        </div>
      </Screen>
      {modalOpen && <Modal closeHandler={toggleModal}>{modalContent}</Modal>}
    </Fragment>
  )
}

export default EventScreen;