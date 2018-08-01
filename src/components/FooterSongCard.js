import React from 'react'

import classes from './FooterSongCard.css'
import art from '../images/example-art.jpg'

const FooterSongCard = (props) => {
  return (
    <div className={classes.FooterSongCard}>
      <img className={classes.Art} src={art} alt="art"/>
      <div>
        <div>ArtistName</div>
        <div>TrackName</div>
      </div>
    </div>
  )
}

export default FooterSongCard
