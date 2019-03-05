import React, { Fragment } from 'react';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import { Card } from '../../../components/common';

const EventsScreen = () => {
  return (
    <Fragment>
      <AdminPageHeader title="Events"></AdminPageHeader>
      <Card>
        Info for events here
      </Card>
    </Fragment>
  )
}

export default EventsScreen;