import React from 'react';

// components
import TopBar from './TopBar/TopBar';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

const MainLayout = ({ children }) => {
  return (
    <div>
      <CssBaseline />

      <TopBar />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
