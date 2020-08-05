import React from 'react'
import styles from './index.module.css'

export const Layout: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    { children }
  </div>
)