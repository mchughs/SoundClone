import React from 'react'

import classes from './SongControls.css'

import Control from './Control'
import prev from '../images/prev.png'
import play from '../images/play.png'
import next from '../images/next.png'
import repeat from '../images/repeat.png'
import volume from '../images/Volume-down.png'

const SongControls = (props) => {
  return (
    <div className={classes.SongControls}>
      <Control>
        <img src={prev} alt="prev"/>
      </Control>
      <Control>
        <img src={play} alt="play"/>
      </Control>
      <Control>
        <img src={next} alt="next"/>
      </Control>
      <Control>
        <img src={repeat} alt="repeat"/>
      </Control>
      <Control>
        <img src={volume} alt="volume"/>
      </Control>
    </div>
  )
}

export default SongControls
