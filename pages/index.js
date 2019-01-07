import React, { Component } from 'react'
import Headline,{Subtitle} from '../components/Core/Texts';
import Home from '../components/Home/index'
import TextBox from '../components/Core/TextBox'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Home/>
        
        
        <Headline>test 2</Headline>
        <Subtitle>abc</Subtitle>
        <TextBox text = "Boo" /> 
      </div>
    )
  }
}
