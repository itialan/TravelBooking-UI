import React from 'react';

// components
import Header from './Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
