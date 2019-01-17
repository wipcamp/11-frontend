import React, { Component } from 'react'
import styled from 'styled-components'

import ImgChangeByDay from './ImgChangeByDay'
import Model from '../Core/Model'
import Headline, { Subtitle } from '../Core/Texts'

const Head = styled.div`
  text-align : center;
`

export default class componentName extends Component {
  render () {
    return (
      <div className="container" >
        <Head className="text-center col-12">
          <Headline>When</Headline>
          <Subtitle>ค่ายนี้จัดเมื่อไร?</Subtitle>
        </Head>
        <ImgChangeByDay />
        <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />        
      </div>
    )
  }
}
