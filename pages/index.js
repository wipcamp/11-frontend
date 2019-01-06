import React, { Component } from 'react'
import Home from '../components/Home/index'
import Headline from '../components/Core/Headline';
import TextBox from '../components/Core/TextBox'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Home/>
        
        
        <Headline>test 2</Headline>
        <TextBox text = "Boo" />
      </div>
    )
  }
}
