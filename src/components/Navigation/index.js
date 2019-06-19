import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" exact to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={ROUTES.ACCOUNT}>Account</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={ROUTES.ADMIN}>Admin</NavLink>
    </li>
    <li className="nav-item">
    <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink className="nav-link" activeClassName="active" to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </ul>
);

export default Navigation;
