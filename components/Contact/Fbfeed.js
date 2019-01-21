import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page } from 'react-facebook'

const Size = styled.div`
  @media (min-width:320px) {
    padding-left:.75em;
    padding-right:.75em;
  }
`

export default class Example extends Component {
  render () {
    return (
      <Size>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" height="400px"tabs="timeline" />
        </FacebookProvider>
      </Size>
    )
  }
}
