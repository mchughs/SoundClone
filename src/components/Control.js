import React from 'react'

import classes from './Control.css'

const Control = (props) => {
  return (
    <div className={classes.Control}>
      {props.children}
    </div>
  )
}

export default Control
