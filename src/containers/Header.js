import React, { Component } from 'react'

import classes from './Header.css'

import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import NavButton from '../components/NavButton'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.ButtonContainer}>
          <div className={classes.Left}>
            <Logo />
          </div>
          <div className={classes.Center}>
            <SearchBar />
          </div>
          <div className={classes.Right}>
            <NavButton><a>Sign In</a></NavButton>
            <NavButton><a>Upload</a></NavButton>
            <NavButton><a>...</a></NavButton>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
