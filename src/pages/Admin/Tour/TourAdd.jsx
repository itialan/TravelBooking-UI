import React from 'react';

// constants
import { ROLE } from '../../../constants/roles';

// layouts
import MainLayout from '../../../layouts/Admin/MainLayout/MainLayout';

// routes
import RoleRoute from '../../../routes/RoleRoute';

const TourAdd = () => {
  const requiredRoles = [ROLE.ADMIN];

  return (
    <MainLayout>
      <RoleRoute requiredRoles={requiredRoles}>
        <h2>Add Tour</h2>
      </RoleRoute>
    </MainLayout>
  );
};

export default TourAdd;
