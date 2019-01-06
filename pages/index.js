import React, { Component } from 'react'
import Headline,{Subtitle} from '../components/Core/Texts';
import TextBox from '../components/Core/TextBox'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Headline>test 2</Headline>
        <Subtitle>abc</Subtitle>
        <TextBox text = "Boo" />
      </div>
    )
  }
}
