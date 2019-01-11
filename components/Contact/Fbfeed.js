import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page, Feed } from 'react-facebook'

const Box = styled.div`
  width: 100%;
  height: 100%;
  border : solid 10px white;
  border-radius:20px;
`

export default class Example extends Component {
  render () {
    return (
      <Box>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" width="510px" tabs="timeline" />
        </FacebookProvider>
      </Box>
    )
  }
}
