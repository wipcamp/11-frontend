import React, { Component } from 'react'
import { FacebookProvider, Page } from 'react-facebook'

export default class Example extends Component {
  render () {
    return (
      <FacebookProvider appId="1778641378908399">
        <Page href="https://www.facebook.com/wipcamp/" tabs="timeline" />
      </FacebookProvider>
    )
  }
}
