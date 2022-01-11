import React from 'react';

// constants
import { ROLE } from '../../../constants/roles';

// layouts
import MainLayout from '../../../layouts/Admin/MainLayout/MainLayout';

// routes
import RoleRoute from '../../../routes/RoleRoute';

const TourList = () => {
  const requiredRoles = [ROLE.ADMIN, ROLE.GUIDE];

  return (
    <MainLayout>
      <RoleRoute requiredRoles={requiredRoles}>
        <h2>List Tour</h2>
      </RoleRoute>
    </MainLayout>
  );
};

export default TourList;
