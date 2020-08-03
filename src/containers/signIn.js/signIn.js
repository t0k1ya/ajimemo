// 認証可能かチェック
// OKならHomeへリダイレクト
// NGならSignUpへリダイレクト

import React from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const PASSWORD = '1234'

  if (props.password === PASSWORD) {
    return <Redirect to="/home" />
  } else {
    return <Redirect to="/signin" />
  }
}

export default SignIn;