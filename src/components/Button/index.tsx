import React from 'react'
import styles from './index.module.css'

interface propsTypes {
  title: string,
  hasColor?: boolean,
  onClick: () => {},
}

export const Button: React.FC<propsTypes> = ({ title, hasColor, onClick }) => {
  return (
    <button className={`${styles.btn} ${hasColor ? styles.has_color : ''}`} onClick={onClick}>{ title }</button>
  )
}