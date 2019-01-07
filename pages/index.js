import React, { Component } from 'react'
import Background from '../components/Core/Background'
import Contact from '../components/Contact/Index'
import Home from '../components/Home/index'
import App from '../components/Core/App';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Home/>
        <App />
      </div>
    )
  }
}
