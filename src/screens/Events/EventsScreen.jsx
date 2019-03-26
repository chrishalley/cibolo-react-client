import React, { Component } from 'react'

import { Screen, Card, Button, Modal, Chip, SVGIcon, UserAvatar } from '../../components/common';
import BookingForm from '../../components/BookingForm/BookingForm';
import Draggable from '../../components/Draggable/Draggable';
import BuiltForm from '../../components/BuiltForm/BuiltForm';
import Sandbox from '../../components/common/Sandbox/Sandbox';

import { Fieldset } from '../../components/common/FormBuilder/components/inputs';
import { ColorPicker, ImageInput, LinkInput } from '../../components/common/FormBuilder/components/inputs';

class EventScreen extends Component {

  state = { showModal: false };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  renderModal = () => {
    if (this.state.showModal) {
      return (
        <Modal closeHandler={this.toggleModal}>
          <BookingForm></BookingForm>
        </Modal>
      );
    }
  };

  colors = [
    '#00BCD4',
    '#F79256',
    '#FBD1A2',
    '#7DCFB6',
    '#1D4E89',
    '#FC5130',
    '#06908F',
    '#7AE582'
  ];

  render() {
    return (
      <Screen>
        <h1>Event Screen</h1>
        <Card>
          <LinkInput />
        </Card>
        <Card>
          <Sandbox />
        </Card>
        {/* <Card>
          <SandboxForm />
        </Card>
        <Card>
          <h2>Hire our space!</h2>
          <p>Marzipan apple pie gingerbread lemon drops oat cake oat cake gummies wafer donut. Brownie marzipan topping candy canes lemon drops candy canes liquorice. Muffin chocolate bar carrot cake sugar plum candy canes sweet sweet jelly beans.</p>
          <p>Liquorice jelly beans sweet. Cookie toffee toffee candy canes cake bear claw icing gingerbread. Tart tootsie roll brownie danish jelly beans candy brownie powder sesame snaps.</p>
          <p>Cake candy canes cake brownie. Biscuit liquorice croissant candy canes. Powder gummies chocolate gummies lollipop. Sweet cotton candy cake danish biscuit candy ice cream carrot cake jujubes.</p>
          <Button clickHandler={this.toggleModal}>Request Booking</Button>
          <ImageInput />
          <ColorPicker colors={this.colors}/>
          <Chip onClick={() => console.log('clicked')}>
            <SVGIcon icon="close" strokeWidth="20"/>
          </Chip>
          <UserAvatar user={{firstName: 'Chris', lastName: 'Halley'}} chip={<Chip onClick={() => console.log('click')}><SVGIcon strokeWidth="20" icon="close"/></Chip>} />
        </Card>
        <div style={{ backgroundColor: 'red', height: '200vh' }}></div>
        {this.renderModal()}
        <Draggable></Draggable>
        <BuiltForm></BuiltForm> */}
      </Screen>
    );
  };
}

export default EventScreen;