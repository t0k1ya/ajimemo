import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddBoxIcon from '@material-ui/icons/AddBox'
import styles from './index.module.css'

const notHaveFooter = (pathname: string) => pathname === '/login' || pathname === 'signup'

const TAB_TYPES = {
  HOME: '/',
  PROFILE: '/profile',
  ADD: '/add',
}

const Footer: React.FC = (props: any) => {
  const [ currentTab, setCurrentTab ] = useState(props.location.pathname)

  if (notHaveFooter(props.location.pathname)) return null
  return (
    <React.Fragment>
      { props.children }
      <div className={styles.footer_wrapper}>
        <div onClick={() => {
          setCurrentTab(TAB_TYPES.PROFILE)
          props.history.push('/profile')
        }} >
          <AccountCircleIcon style={
            currentTab === TAB_TYPES.PROFILE ? { color: 'white'} : { color: 'gray'}
          } fontSize="large" />
        </div>
        <div onClick={() => {
          setCurrentTab(TAB_TYPES.HOME)
          props.history.push('/')
        }} >
        <HomeIcon style={
          currentTab === TAB_TYPES.HOME ? { color: 'white'} : { color: 'gray'}
        } fontSize="large" />
        </div>
        <div onClick={() => {
          setCurrentTab(TAB_TYPES.ADD)
          props.history.push('/add')
        }} >
          <AddBoxIcon style={
            currentTab === TAB_TYPES.ADD ? { color: 'white'} : { color: 'gray'}
          } fontSize="large" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Footer)