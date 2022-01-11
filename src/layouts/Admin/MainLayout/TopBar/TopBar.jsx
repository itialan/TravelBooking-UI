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

const TopBar = ({ isDrawer, handleToggleDrawer }) => {
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
          edge="start"
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
          edge="start"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow}></div>
        <div className={classes.topBarSetting}>
          <Account {...classes} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopBar);
