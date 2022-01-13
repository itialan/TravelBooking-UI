import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// constants
import { PATH } from '../constants/paths';

// selectors
import { userSelector } from '../selectors/auth.selector';

const RoleRoute = ({ children, requireRoles = [] }) => {
  const history = useHistory();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (!user || requireRoles.length === 0) {
      return;
    }

    const checkRole = requireRoles.includes(user.role);
    if (!checkRole) {
      history.replace(PATH.SIGNIN);
    }
  }, [history, user, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
