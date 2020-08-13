import React from 'react'
import { withRouter } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddBoxIcon from '@material-ui/icons/AddBox'
import styles from './index.module.css'

const Footer: React.FC = (props: any) => {
  return (
    <React.Fragment>
      { props.children }
      <div className={styles.footer_wrapper}>
        <div onClick={() => props.history.push('/logout')} >
          <AccountCircleIcon style={{ color: 'white'}} fontSize="large" />
        </div>
        <div onClick={() => props.history.push('/home')} >
        <HomeIcon style={{ color: 'white'}} fontSize="large" />
        </div>
        <div onClick={() => props.history.push('/add')} >
          <AddBoxIcon style={{ color: 'white'}} fontSize="large" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Footer)