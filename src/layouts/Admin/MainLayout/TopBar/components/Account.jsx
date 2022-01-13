import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material core
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// material icon
import AccountCircle from '@material-ui/icons/AccountCircle';

// thunks
import { signOut } from '../../../../../redux/auth/auth.thunks';

// selectors
import { userSelector } from '../../../../../selectors/auth.selector';

const Account = ({ ...classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(userSelector);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(signOut(history));
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.textRole}>
          {user ? user.role.toUpperCase() : 'Loading...'}
        </div>
        <Divider />
        <MenuItem>My account</MenuItem>
        <MenuItem className={classes.menuProfile} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Account;
