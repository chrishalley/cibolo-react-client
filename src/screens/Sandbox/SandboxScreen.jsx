import React, { useState } from 'react'

import { Screen, Card, Modal } from '../../components/common';

import { ImageInput, LinkInput } from '../../components/common/FormBuilder/components/inputs';

const EventScreen = props => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  };

  const renderModal = () => {
    return showModal && (
        <Modal closeHandler={this.toggleModal}>
          
        </Modal>
      );
  };

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
        {renderModal()}
      </Screen>
    );
}

export default EventScreen;