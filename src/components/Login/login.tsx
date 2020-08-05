import React from 'react'
import { withRouter } from 'react-router-dom'
import User from '../../containers/user'
import { Button } from '../Button'
import styles from './index.module.css'
import Icon from './images/aji_icon.png'

const Login = (props: any) => {

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
        <Button
          onClick={() => click()}
          title="ユーザ名、メールアドレス"
        />
      </div>
      <div className={styles.btn_wrapper}>
        <Button
          onClick={() => click()}
          title="パスワード"
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

      <div>
        <div>アカウントをお持ちでないですか？</div>
        <div>新規登録する</div>
      </div>
    </div>
  ) 
}

export default withRouter(Login)