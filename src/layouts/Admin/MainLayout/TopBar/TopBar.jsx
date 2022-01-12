import React, { memo } from 'react';

// libs
import clsx from 'clsx';

// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// material icons
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

// components
import Account from './components/Account';

// styles
import useStyles from './styles';

function TopBar({ isDrawer, handleToogleDrawer }) {
  const classes = useStyles();
  console.log('TopBar');

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawer,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToogleDrawer}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <div className={classes.topBar_setting}>
          <Account {...classes} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default memo(TopBar);
