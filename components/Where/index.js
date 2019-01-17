import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'

const Map = styled.img`
  width:50%;
  margin-top : 3%;
  margin-bottom: 5%; 
  justify-content: center;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:320px) {
    width:90%;
  }
  @media (min-width:412px) {
    width:50%;
    margin-top : 6%;
    margin-bottom: 0%; 
  }
`
const Head = styled.div`
text-align : center;

`
const BoxStyle = styled(PDBox)`
    background: rgba(196, 196, 196, 0.2);
`
const Layout = styled.div`  
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <Layout className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Head className="col-12">
              <Headline>Where</Headline>
            </Head>
            <BoxStyle>
              <Subtitle className="row justify-content-center mb-5"><b>ค่ายนี้จัดที่ไหน?</b></Subtitle>
              <Small >
                <Font>คณะเทคโนโลยีสารสนเทศ<br />มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Font>
              </Small>
              <Map src='static/img/Map22.png' alt="map" />
            </BoxStyle>
            <Model className="center mb-10" wippo='static/img/wippo/PurplePotato.png' alt="wippo"/>
          </Layout>
        </div>
      </div>
    )
  }
}
