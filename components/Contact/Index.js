import React, { Component } from 'react'
import Logo from './Logo'

export default class componentName extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <Logo img='../../static/img/instagram.png' className="col-6" />
      </div>
    )
  }
}
