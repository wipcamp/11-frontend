import React, { Component } from 'react'

import Logo from './Logo'
import Fbfeed from './Fbfeed'

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Fbfeed />
          </div>
          <div className="col-6">
            <Logo contactImg="../../static/img/social/instagram.png" className="col-6" />
          </div>
        </div>
      </div>
    )
  }
}
