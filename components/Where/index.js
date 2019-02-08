import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from './background'

const Map = styled.img`
  height: 35%;
  justify-content: center;
  cursor: pointer;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );

  &:hover{
    content: url('../../static/img/map_hover.png');

  }
  @media (min-width:320px) {
    width:60%;
  }
  @media (min-width:412px) {
    width:50%;
  }
  z-index:9;
`

const WhereText = [
  'คณะเทคโนโลยีสารสนเทศ',
  'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
]
export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo wippo='wippoWhere.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row justify-content-center">
                <h1><Headline>Where</Headline></h1>
                <div className="col-12 mt-4">
                  <div className="text-center">
                    <Subtitle>ค่ายจัดที่ไหน ?</Subtitle>
                  </div>
                  <Small>
                    {WhereText.map((info, i) => (
                      <Font key = {i} className = "row justify-content-center m-1">{info}</Font>
                    ))}
                  </Small>
                  <a className = "row justify-content-center" href="https://goo.gl/j6GJ21" target="_blank" ><Map src='static/img/map.png' alt="map" /></a>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
