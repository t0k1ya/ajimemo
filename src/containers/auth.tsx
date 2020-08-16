import React from 'react';
import { Redirect } from 'react-router-dom';
import User from '../containers/user';

const Auth = (props: any) => {
  console.log('props: ', props)
  return User.isLoggedIn() ? props.children : <Redirect to="/login" />
}

  export default Auth