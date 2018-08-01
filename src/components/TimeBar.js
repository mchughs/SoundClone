import React from 'react'

import classes from './TimeBar.css'

const TimeBar = (props) => {
  return (
    <div className={classes.TimeBar}>
      <div className={classes.Counter}>0:00</div>
      <div className={classes.TimePassed}>
        <div className={classes.Background}></div>
        <div className={classes.Progress} style={{width: "199px"}}></div>
        <div className={classes.Slider} style={{left: "199px"}}></div>
      </div>
      <div className={classes.MaxTime}>3:14</div>
    </div>
  )
}

export default TimeBar
