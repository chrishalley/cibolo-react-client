import React, { Fragment } from 'react';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import { Card } from '../../../components/common';

const BookingsScreen = () => {
  return (
    <Fragment>
      <AdminPageHeader title="Bookings"></AdminPageHeader>
      <Card closeMethod={() => console.log('close')}>
        Info for bookings here
      </Card>
    </Fragment>
  );
}

export default BookingsScreen;