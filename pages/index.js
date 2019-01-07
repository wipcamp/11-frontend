import React, { Component } from 'react'
import Background from '../components/Core/Background'
import Contact from '../components/Contact/Index'
import Headline , {Subtitle} from '../components/Core/Texts'
import TextBox from '../components/Core/TextBox'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Headline>test 2</Headline>
        <Subtitle>abc</Subtitle>
        <TextBox text = "Boo" /> 
        <Background bgImageUrl='../static/img/fallbg.png'/>
        <Contact  />
      </div>
    )
  }
}
