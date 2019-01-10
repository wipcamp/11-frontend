import React, { Component } from 'react'
import ImgChangeByDay from './ImgChangeByDay'
import Headline, { Subtitle } from '../Core/Texts'
import styled from 'styled-components'
// import Textbox from './TextBoxLong'
const Head = styled.div`
  text-align : center;
`

export default class componentName extends Component {
  render () {
    return (
      <div className="container p-5">
        <Head className="text-center col-12">
          <Headline>When</Headline>
          <Subtitle>ค่ายนี้จัดเมื่อไร?</Subtitle>
        </Head>
        <ImgChangeByDay />
      </div>
    )
  }
}
