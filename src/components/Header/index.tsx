import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './index.module.css'

const goBack = (props: any) => props.history.push('/')

const Category: React.FC = () => {
  return (
    <div className={styles.header_wrapper}>
      アイテムを登録
    </div>
  )
}

export default Category