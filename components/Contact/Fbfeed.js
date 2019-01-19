import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page } from 'react-facebook'

export default class Example extends Component {
  render () {
    return (
      <div>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" width="350" height="350" tabs="timeline" />
        </FacebookProvider>
      </div>
    )
  }
}
