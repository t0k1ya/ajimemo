import React from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { LoginTypes, SignUpTypes } from '../../Types'
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

  const gotoHome = async (params: SignUpTypes) => {
    try {
      await User.signUp(params)
      props.history.push('/')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.img_signup} src={Icon} alt="" />
      <div className={styles.description}>
        楽しんだ味を記録して<br />
        味覚と育てましょう
      </div>
      <form onSubmit={props.handleSubmit(gotoHome)} >
        <div className={styles.btn_wrapper}>
          <TextField
            name="name"
            type="text"
            placeHolder="ニックネーム"
          />
        </div>
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
            title="登録する"
            hasColor
          />
        </div>
      </form>

      <div className={styles.border}>
        または
      </div>

      <div className={styles.btn_wrapper}>
        <Button
          // onClick={}
          title="Googleで登録"
        />
      </div>

      <div className={styles.signup_text_wrapper}>
        <div>アカウントをお持ちですか？</div>
        <div
         className={styles.signup_text}
         onClick={() => props.history.push('/login')}
        >
          ログインする
        </div>
      </div>
    </div>
  ) 
}

const Component = reduxForm<LoginTypes, any>({
  form: 'login'
})(SignUp)

export default withRouter(Component)