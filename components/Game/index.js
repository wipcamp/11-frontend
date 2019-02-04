import React, { Component } from 'react'
import styled from 'styled-components'

import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from './background'

const Img = styled.img`
   @media(min-width:320px) {
    width:309px;
    height: 164px;
  }
  @media(min-width:1024px) {
    width:650px;
    height:345px;
  }
`
const Div = styled.div`
  z-index:9;
  transform: translate(0%,30%);
  @media(min-width:320px) {
    margin-top:8em;
  }
  @media(min-width:1024px) {
    margin-top:5em;
  }
`

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Background />
        <Wippo wippo='wippoGame.png' />
        <div className="container">
          <div className="row">
            <Div className="pt-5 col-12 d-flex justify-content-center align-items-center text-center">
              <a href="http://game.wip.camp" target="_blank">
                <Img alt="Gamecenter" src='../../static/img/gameCenteIcon.png' />
              </a>
            </Div>
          </div>
        </div>
      </Bg>
    )
  }
}
