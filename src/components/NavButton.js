import React from 'react'

import classes from './NavButton.css'

const NavButton = (props) => {
  return (
    <nav className={classes.NavButton}>
      {props.children}
    </nav>
  )
}

export default NavButton
