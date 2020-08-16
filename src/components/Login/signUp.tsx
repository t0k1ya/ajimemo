import React from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { LoginTypes } from '../../Types'
import User from '../../containers/user'
import { TextField } from '../TextField'
import { Button } from '../Button'
import styles from './index.module.css'
import Icon from './images/aji_icon.png'

const SignUp = (props: any) => {

  if (User.isLoggedIn()) {
    alert('ログイン済みです')
    props.history.push('/')
  }

  const click = async () => {
    try {
      await User.login('email', 'password')
      props.history.push('/')
    } catch (e) {
      console.log(e)
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
          title="登録する"
          hasColor
        />
      </div>

      <div className={styles.border}>
        または
      </div>

      <div className={styles.btn_wrapper}>
        <Button
          onClick={() => click()}
          title="Googleで登録"
        />
      </div>

      <div className={styles.signup_text_wrapper}>
        <div>アカウントをお持ちですか？</div>
        <div className={styles.signup_text}>ログインする</div>
      </div>
    </div>
  ) 
}

const Component = reduxForm<LoginTypes, any>({
  form: 'login'
})(SignUp)

export default withRouter(Component)