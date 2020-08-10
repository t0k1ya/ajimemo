import React from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import User from '../../containers/user'
import { TextField } from '../TextField'
import { Button } from '../Button'
import styles from './index.module.css'
import Icon from './images/aji_icon.png'

interface LoginTypes {
  name: string
  password: string
}

const Login = (props: any) => {

  if (User.isLoggedIn()) {
    alert('ログイン済みです')
    props.history.push('/home')
  }

  const click = async () => {
    try {
      await User.login('email', 'password')
      props.history.push('/home')
    } catch (e) {

    }
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={Icon} alt="" />
      <div className={styles.btn_wrapper}>
        <TextField
          name="name"
          type="text"
          placeHolder="ユーザ名、メールアドレス"
        />
      </div>
      <div className={styles.btn_wrapper}>
        <TextField
          name="name"
          type="password"
          placeHolder="パスワード"
        />
      </div>
      <div className={styles.btn_wrapper}>
        <Button
          onClick={() => click()}
          title="ログイン"
          hasColor
        />
      </div>

      <div className={styles.border}>
        または
      </div>

      <div className={styles.btn_wrapper}>
        <Button
          onClick={() => click()}
          title="Googleでログイン"
        />
      </div>

      <div className={styles.signup_text_wrapper}>
        <div>アカウントをお持ちでないですか？</div>
        <div className={styles.signup_text}>新規登録する</div>
      </div>
    </div>
  ) 
}

const Component = reduxForm<LoginTypes, any>({
  form: 'login'
})(Login)

export default withRouter(Component)