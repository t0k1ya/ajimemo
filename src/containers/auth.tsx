import React from 'react';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import User from '../containers/user';

const Auth = (props: any) => {
  if (User.isLoggedIn()) return props.children
  if (props.location.pathname === '/signup') return <Redirect to="/signup" />
  return <Redirect to="/login" />
}

export default withRouter(Auth)