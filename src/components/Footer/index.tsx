import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import styles from './index.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrapper}>
      <AccountCircleIcon style={{ color: 'white'}} fontSize="large" />
      <HomeIcon style={{ color: 'white'}} fontSize="large" />
      <AddBoxIcon style={{ color: 'white'}} fontSize="large" />
    </div>
  )
}

export default Footer