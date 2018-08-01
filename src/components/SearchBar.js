import React from 'react'

import classes from './SearchBar.css'

import searchIcon from '../images/search-icon.png'

const SearchBar = (props) => {
  return (
    <div className={classes.SearchBar}>
      <input
        type="search"
        autoComplete="off"
        placeholder="Search for artists, albums, or tracks..." />
      <img src={searchIcon} alt="_"/>
    </div>
  )
}

export default SearchBar
