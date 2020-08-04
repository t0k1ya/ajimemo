import React from 'react'
import { withRouter } from 'react-router-dom'
import User from '../../containers/user'

const Login = (props: any) => {

  const click = async () => {
    try {
      await User.login('email', 'password')
      props.history.push('/home')
    } catch (e) {

    }
  }

  return (
    <button onClick={() => click()}>ログイン</button>
  ) 
}

export default withRouter(Login)