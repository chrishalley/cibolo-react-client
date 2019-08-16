import React from 'react';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import { Card } from '../../../components/common';

const BookingsScreen = () => {
  return (
    <>
      <AdminPageHeader title="Bookings"></AdminPageHeader>
      <Card closeMethod={() => console.log('close')}>
        Info for bookings here
      </Card>
    </>
  );
}

export default BookingsScreen;