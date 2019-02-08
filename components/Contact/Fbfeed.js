import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page } from 'react-facebook'

const Size = styled.div`
  height: 400px;
  @media (min-width:320px) {
    padding-left:5px;
    padding-right:5px;
    width:100%;
    height: 280px;
  }
  @media (min-width:576px) {
    text-align: center !important;
  }
  @media (min-width:768px) {
    min-width:300px;
    width:100%;
    height:400px;
  }
`

export default class Example extends Component {
  render () {
    return (
      <Size>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" height="300px" tabs="timeline" />
        </FacebookProvider>
      </Size>
    )
  }
}
