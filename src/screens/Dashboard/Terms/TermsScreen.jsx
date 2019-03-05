import React, { Fragment } from 'react';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import { Card } from '../../../components/common';

const TermsScreen = () => {
  return (
    <Fragment>
      <AdminPageHeader title="Terms & Conditions"></AdminPageHeader>
      <Card>
        Info for terms here
      </Card>
    </Fragment>
  );
}

export default TermsScreen;