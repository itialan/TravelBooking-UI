import React from 'react';

// constants
import { ROLE } from '../../../constants/roles';

// layouts
import MainLayout from '../../../layouts/Admin/MainLayout/MainLayout';

// routes
import RoleRoute from '../../../routes/RoleRoute';

const Dashboard = () => {
  const requiredRoles = [ROLE.ADMIN, ROLE.GUIDE];

  return (
    <MainLayout>
      <RoleRoute requiredRoles={requiredRoles}>
        <h2>Dashboard</h2>
      </RoleRoute>
    </MainLayout>
  );
};

export default Dashboard;
