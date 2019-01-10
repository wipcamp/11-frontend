import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle, Paragraph, Small } from '../Core/Texts'

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
const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
   

    @media (min-width:320px) {
      padding : 1.5em 1em;
    }
    
    @media (min-width:576px) {
      padding : 1em 2em;
    }
    
    @media (min-width:1024px) {
      padding : 2em 5em;
    }
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
        <div className="row justify-content-center">
          <Layout className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Head className="text-center col-12">
              <Headline>Where</Headline>
              <Subtitle>ค่ายนี้จัดที่ไหน?</Subtitle>
            </Head>
            <BoxStyle>
              <Map src='static/img/Map22.png' alt="map" />
            </BoxStyle>
          </Layout>
        </div>
      </div>
    )
  }
}
