import React, { Component } from 'react'

import classes from './Footer.css'

import SongControls from '../components/SongControls'
import TimeBar from '../components/TimeBar'
import LikeButton from '../components/LikeButton'
import FooterSongCard from '../components/FooterSongCard'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.ButtonContainer}>
          <div className={classes.Left}>
            <SongControls />
          </div>
          <div className={classes.Center}>
            <TimeBar />
          </div>
          <div className={classes.Right}>
            <FooterSongCard />
            <LikeButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
