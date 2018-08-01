import React from 'react'
import {toMinutes} from '../helpers'

import classes from './SongCard.css'

import art from '../images/example-art.jpg'

const SongCard = (props) => {
  console.log(props.imageURL)
  return (
    <div className={classes.SongCard} onClick={() => props.playSong(props.id)}>
      <img className={classes.Art} src={props.imageURL ? props.imageURL : art} alt="art"/>
      <div className={classes.Info}>
        <div className={classes.Details}>
          <div>Artist(s): {props.artists}</div>
          <div>Track: {props.name}</div>
          <div>Posted X years ago</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati delectus iste ratione reprehenderit, expedita, perferendis ex saepe laborum facilis nihil autem quisquam distinctio sunt numquam odit ipsum unde reiciendis?</p>
        <div className={classes.Stats}>
          <div>Duration: {toMinutes(props.duration)}</div>
          <div>Comments</div>
          <div>Plays</div>
          <div>Likes</div>
        </div>
      </div>
    </div>
  )
}

export default SongCard
