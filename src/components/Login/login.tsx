import React from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { LoginTypes } from '../../Types'
import User from '../../containers/user'
import { TextField } from '../TextField'
import { Button } from '../Button'
import styles from './index.module.css'
import Icon from './images/aji_icon.png'

const Login = (props: any) => {

  if (User.isLoggedIn()) {
    alert('ログイン済みです')
    props.history.push('/')
  }

  const gotoHome = async (params: LoginTypes) => {
    try {
      const success = await User.login(params.email, params.password)
      if (success) props.history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.img_login} src={Icon} alt="" />
      <form onSubmit={props.handleSubmit(gotoHome)} >
        <div className={styles.btn_wrapper}>
          <TextField
            name="email"
            type="email"
            placeHolder="メールアドレス"
          />
        </div>
        <div className={styles.btn_wrapper}>
          <TextField
            name="password"
            type="password"
            placeHolder="パスワード"
          />
        </div>
        <div className={styles.btn_wrapper}>
          <Button
            title="ログイン"
            hasColor
          />
        </div>
      </form>

      <div className={styles.border}>
        または
      </div>

      <div className={styles.btn_wrapper}>
        <Button
          title="Googleでログイン"
        />
      </div>

      <div className={styles.signup_text_wrapper}>
        <div>アカウントをお持ちでないですか？</div>
        <div
         className={styles.signup_text}
         onClick={() => props.history.push('/signup')}
        >
          新規登録する
        </div>
      </div>
    </div>
  ) 
}

const Component = reduxForm<LoginTypes, any>({
  form: 'login'
})(Login)

export default withRouter(Component)