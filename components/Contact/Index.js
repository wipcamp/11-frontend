import React, { Component } from 'react'

// import Logo from './Logo'
import Fbfeed from './Fbfeed'

export default class componentName extends Component {
  render () {
    return (
      <div className="row justify-content-center">
        {/* <Logo contactImg="instagram.png" className="col-6" /> */}
        <Fbfeed />
      </div>
    )
  }
}
