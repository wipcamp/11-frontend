import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page } from 'react-facebook'

const Size = styled.div`
  @media (min-width:320px) {
    padding-left:15px;
    padding-right:15px;
    text-align: center !important;
  }
  @media (min-width:576px) {
    text-align: center !important;
  }
  @media (min-width:768px) {
    min-width:300px;
    width:100%;
  }
  @media (min-width:992px){
    padding-left:20px;
    padding-right:20spx;
    text-align: center !important;
  }
`

export default class Example extends Component {
  render () {
    return (
      <Size>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" height="350px" tabs="timeline" />
        </FacebookProvider>
      </Size>
    )
  }
}
