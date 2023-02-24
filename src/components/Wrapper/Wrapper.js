import React from 'react'
import { Outlet } from 'react-router-dom'
import classes from './Wrapper.module.css'
import Header from '../Header/Header'
function Wrapper() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navigation}>
        <Header></Header>
      </div>
      <div className={classes.body}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Wrapper
