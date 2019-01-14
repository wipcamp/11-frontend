import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox';

const BoxStyle = styled(PDBox)`
    background:rgba(196, 196, 196, 0.2);
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
      </div>
    )
  }
}
