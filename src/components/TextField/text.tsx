import React from 'react'
import styles from './text.module.css'

export const TextBox: React.FC<{
  type: string,
  placeHolder: string
}> = ({ type, placeHolder }) => (
  <input
    className={styles.text_field}
    type={type}
    placeholder={placeHolder}
  />
)