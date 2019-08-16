import React from 'react';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import { Card } from '../../../components/common';

const EventsScreen = () => {
  return (
    <>
      <AdminPageHeader title="Events"></AdminPageHeader>
      <Card>
        Info for events here
      </Card>
    </>
  )
}

export default EventsScreen;