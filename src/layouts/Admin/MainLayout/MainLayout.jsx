import React, { useState, useCallback } from 'react';

// components
import TopBar from './TopBar/TopBar';
import NavBar from './NavBar/NavBar';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

// styles
import useStyles from './styles';

const MainLayout = ({ children }) => {
  const [isDrawer, setIsDrawer] = useState(true);
  const classes = useStyles();

  const handleToggleDrawer = useCallback(() => {
    setIsDrawer(!isDrawer);
  }, [isDrawer]);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopBar isDrawer={isDrawer} handleToggleDrawer={handleToggleDrawer} />
      <NavBar isDrawer={isDrawer} />

      <main
        className={
          (classes.content,
          {
            [classes.contentShift]: isDrawer,
          })
        }
      >
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
