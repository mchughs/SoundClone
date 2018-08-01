import React from 'react'

import classes from './SongPage.css'

import SongCard from '../components/SongCard'

const SongPage = (props) => {
  const songs = props.songs.map(song => {
    return <SongCard key={song.id} {...song} playSong={props.playSong}/>
  })
  return (
    <div className={classes.SongPage}>
      {songs}
    </div>
  )
}

export default SongPage
