import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'

const Map = styled.img`
  height: 35%;
  margin-top : 3%;
  margin-bottom: 5%; 
  justify-content: center;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:320px) {
    width:90%;
  }
  @media (min-width:412px) {
    width:75%;
    margin-top : 6%;
    margin-bottom: 0%; 
  }
`

const WhereText = [
  'คณะเทคโนโลยีสารสนเทศ',
  'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
]
export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row justify-content-center">
              <Headline>Where</Headline>
              <PDBox>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <Subtitle className="mb-4"><b>ค่ายนี้จัดที่ไหน?</b></Subtitle>
                  </div>
                  <Small>
                    {WhereText.map((info, i) => (
                      <Font key = {i} className = "row justify-content-center m-1">{info}</Font>
                    ))}
                  </Small>
                  <a className = "row justify-content-center" href="https://goo.gl/j6GJ21" target="_blank" ><Map src='static/img/mapWithWippo.png' alt="map" /></a>
                </div>
              </PDBox>
            </div>
            <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
          </div>
        </div>
      </div>
    )
  }
}
