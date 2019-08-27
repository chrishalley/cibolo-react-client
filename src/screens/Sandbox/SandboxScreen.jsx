import React, { useState } from 'react'

import { Screen, Card, Modal, Spinner } from '../../components/common';

import { ImageInput, LinkInput } from '../../components/common/FormBuilder/components/inputs';

const EventScreen = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState);

    return (
      <Screen>
        <h1>Sandbox Screen</h1>
        <Card>
          <div style={{ width: '40rem' }}>
            <ImageInput onChange={(image) => {console.log('BOOM!', image)}}/>
          </div>
        </Card>
        <Card>
          <button onClick={toggleModal}>Show modal</button>
        </Card>
        <Card>
          <LinkInput onChange={() => {}}/>
        </Card>
        <Card>
          <Spinner />
        </Card>
        {showModal && <Modal closeHandler={toggleModal} />}
      </Screen>
    );
}

export default EventScreen;