import React from 'react'

import classes from './Logo.css'

import icon from '../images/icon.png'

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={icon} alt="SoundClone"/>
    </div>
  )
}

export default Logo
