import React, { Component } from 'react'
import axios from 'axios';

import classes from './Layout.css'

import Header from './Header'
import SongPage from '../pages/SongPage'
import Footer from './Footer'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: true,
      songs: [],
    }
  }

  componentDidMount () {
    axios.get('https://api.spotify.com/v1/search?q=fire&type=track&limit=5').then((response) => {
      const songs = response.data.tracks.items.map((item) => {
        return ({
          artists: item.artists.map(artist => artist.name).join(', '),
          duration: item.duration_ms,
          id: item.id,
          name: item.name,
          type: 'track',
          imageURL: item.album.images.find(image => image.height <= 300).url
        })
      })
      this.setState({songs})
    }).catch((err) => {
      console.log(err)
    })
  }

  playSong = (id) => {
    console.log(this.state.songs.find(song => song.id === id))
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <SongPage songs={this.state.songs} playSong={this.playSong}/>
        <Footer />
      </div>
    )
  }
}

export default Layout
