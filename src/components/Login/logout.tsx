import React from 'react'
import { withRouter } from 'react-router-dom'
import User from '../../containers/user'

const Logout = (props: any) => {

  const click = async () => {
    try {
      await User.logout()
      props.history.push('/login')
    } catch (e) {

    }
  }

  return (
    <button onClick={() => click()}>ログアウト</button>
  ) 
}

export default withRouter(Logout)