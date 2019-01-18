import React, { Component } from 'react'
import styled from 'styled-components'

import ImgChangeByDay from './ImgChangeByDay'
import Model from '../Core/Model'
import Background from '../Core/Background'
import Headline, { Subtitle } from '../Core/Texts'

const Head = styled.div`
  text-align : center;
`

export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/when.png">
      <div className="container">
        <Head className="text-center col-12">
          <Headline>When</Headline>
          <Subtitle>ค่ายนี้จัดเมื่อไร?</Subtitle>
        </Head>
        <ImgChangeByDay />
        <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />        
      </div>
      </Background>
    )
  }
}
