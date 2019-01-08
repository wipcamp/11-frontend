import React, { Component } from 'react'
import Background from '../components/Core/Background'
import Contact from '../components/Contact/index'
import Home from '../components/Home/index'
import App from '../components/Core/App';
import Who from '../components/Who/index'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Home/>
        {/* <App /> */}
        <Who />
      </div>
    )
  }
}
