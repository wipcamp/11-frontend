import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'

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
    background: rgba(196, 196, 196, 0.73);
`
const Layout = styled.div`  
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`
const Wippo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
width:10em;
@media (min-width:320px) {
  width:5em;
}
@media (min-width:420px) {
  width:7em;
}
@media (min-width:576px) {
  width:7em;
}
@media (min-width:768px) {
  width:10em;
}
@media (min-width:1024px) {
  width:10em;
}
`
export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <Layout className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Head className="col-12">
              <Headline>Where</Headline>
              <Subtitle>ค่ายนี้จัดที่ไหน?</Subtitle>
            </Head>
            <BoxStyle>
              <Small >
                <Font>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยพระจอมเกล้าธนบุรี</Font>
              </Small>
              <Map src='static/img/Map22.png' alt="map" />
              </BoxStyle>
              <Wippo className="center" src='static/img/wippo/PurplePotato.png' alt="wippo"/>
          </Layout>
        </div>
      </div>
    )
  }
}
