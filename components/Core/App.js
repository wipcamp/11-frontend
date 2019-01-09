import React, { Component } from 'react'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
        <What />
        <Who />
      </div>
    )
  }
}
