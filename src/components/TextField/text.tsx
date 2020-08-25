import React from 'react'
import styles from './text.module.css'

export const TextBox: React.FC<{
  type: string,
  placeHolder: string,
  input: any,
}> = ({ type, placeHolder, input }) => (
  <input
    className={styles.text_field}
    type={type}
    placeholder={placeHolder}
    {...input}
  />
)