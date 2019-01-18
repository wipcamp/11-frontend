import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Background from '../Core/Background'
import Model from '../Core/Model'

const BoxStyle = styled(PDBox)`
    background:rgba(196, 196, 196, 0.4);
`

const Layout = styled.div`  
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`

const Head = styled.div`
  text-align : center;
`
export default class index extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/game1.png">
        <div className="container">
          <div className="row justify-content-center text-center">
            <Layout className="col-12 col-sm-12 col-md-12 col-lg-12">
              <Head className="col-12">
                <Headline>Game</Headline>
                <Subtitle>สนุกนะเล่นสิ</Subtitle>
              </Head>
              <BoxStyle>
              </BoxStyle>
            </Layout>
          </div>
          <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />        
        </div>
      </Background>
    )
  }
}
