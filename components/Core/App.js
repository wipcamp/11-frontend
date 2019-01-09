import React, { Component } from 'react'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import When from '../When'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
        <What />
        <When />
      </div>
    )
  }
}
