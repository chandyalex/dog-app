import './App.scss'
import React, { Component } from 'react'
import { Route } from "react-router-dom"

import Header from './components/Header'
import SearchDog from './components/SearchDog'
import About from './components/About'


class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        
        <main id="main-content">
          <Route exact path='/' component={ SearchDog } />
          <Route path='/about' component={ About } />
        </main>

      </div>
    )
  }
}

export default App