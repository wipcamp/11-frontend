import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookProvider, Page } from 'react-facebook'

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

export default class Example extends Component {
  render () {
    return (
      <Box>
        <FacebookProvider appId="1778641378908399">
          <Page href="https://www.facebook.com/wipcamp/" tabs="timeline" />
        </FacebookProvider>
      </Box>
    )
  }
}
