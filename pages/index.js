import React, { Component } from 'react'
import Headline from '../components/Core/Headline';
import TextBox from '../components/Core/TextBox'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Headline>test 2</Headline>
        <TextBox text = "Boo" />
      </div>
    )
  }
}
