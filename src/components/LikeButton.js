import React from 'react'

import classes from './LikeButton.css'

import like from '../images/black-heart.png'

const LikeButton = (props) => {
  return (
    <div className={classes.LikeButton}>
      <img src={like} alt="like"/>
    </div>
  )
}

export default LikeButton
