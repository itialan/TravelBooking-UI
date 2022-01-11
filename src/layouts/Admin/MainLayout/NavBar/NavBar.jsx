import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

// material core
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

//constants
import { PATH } from '../../../../constants/paths';

// styles
import useStyles from './styles';

// images
import logo from '../../../../assets/images/logo.png';

// routes
import { navBarCommon } from '../../../../routes/navBarCommon';

// components
import NavBarItem from './NavBarItem';

const NavBar = ({ isDrawer }) => {
  const classes = useStyles();
  const location = useLocation();

  console.log('NavBar');

  const renderChildRoutes = ({ acc, curr, pathName, depth = 0 }) => {
    const key = curr.title + depth;

    if (curr.items) {
      // check current navbar item is clicked or not?
      const open = matchPath(pathName, {
        path: curr.href,
        exact: true,
      });

      acc.push(
        <NavBarItem
          key={`multi-${key}`}
          depth={depth}
          icon={curr.icon}
          title={curr.title}
          href={curr.href}
          label={curr.label}
          isExternalLink={curr.isExternalLink}
          open={Boolean(open)}
        >
          {renderNavbarItems({ items: curr.items, depth: depth + 1, pathName })}
        </NavBarItem>
      );
    } else {
      acc.push(
        <NavBarItem
          key={`alone-${key}`}
          depth={depth}
          icon={curr.icon}
          title={curr.title}
          href={curr.href}
          label={curr.label}
          isExternalLink={curr.isExternalLink}
        />
      );
    }

    return acc;
  };

  const renderNavbarItems = ({ items, pathname, depth }) => (
    <List disablePadding>
      {items?.reduce(
        (acc, curr) => renderChildRoutes({ acc, curr, pathname, depth }),
        []
      )}
    </List>
  );

  const renderNavbarCommon = (navbars) => {
    return (
      <>
        {navbars.map((nav) => {
          return (
            <List
              key={nav.subheader}
              subheader={
                <ListSubheader disableSticky>{nav.subheader}</ListSubheader>
              }
            >
              {renderNavbarItems({
                items: nav.items,
                pathName: location.pathname,
              })}
            </List>
          );
        })}
      </>
    );
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Link to={PATH.HOME}>
          <img src={logo} alt="Logo" title="logo" />
        </Link>
      </div>
      <Divider />
      {renderNavbarCommon(navBarCommon)}
    </Drawer>
  );
};

export default memo(NavBar);
