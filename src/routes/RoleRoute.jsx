import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PATH } from '../constants/paths';

const RoleRoute = ({ children, requiredRoles }) => {
  const history = useHistory();
  const role = useSelector((state) => state.auth.currentUser.role);

  useEffect(() => {
    if (!role || requiredRoles.length === 0) {
      return;
    }

    const checkRole = requiredRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH.SIGNIN);
    }
  }, [history, role, requiredRoles]);

  return <>{children}</>;
};

export default RoleRoute;
