import React, { Component } from 'react'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
        <What />
        <Who />
        <Where />
        <When />
      </div>
    )
  }
}
