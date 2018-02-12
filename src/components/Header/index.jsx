import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './styles.scss'

class Header extends Component {
  render () {
    return (
      <header className='main-header'>
        <div id="main-logo" />
        <label id="main-title">Dogs Catalog</label>
        <ul id='main-menu'>
          <li><Link to="/">Search Dog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </header>
    )
  }
}

export default Header