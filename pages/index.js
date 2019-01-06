import React, { Component } from 'react'
import Background from '../components/Core/Background'
import Contact from '../components/Contact/Index'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Background bgImageUrl='../static/img/fallbg.png'/>
        <Contact  />
      </div>
    )
  }
}
