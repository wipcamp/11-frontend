import React, { Component } from 'react'
import styled from 'styled-components'

// import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
// import { PDBox } from '../Core/ResponBox'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'

const Background = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  width: 100%;

  @media(min-width:320px) {
    width:150%;
  }
  @media(min-width:1024px) {
    width: 100%;
  }
`
export default class index extends Component {
  render () {
    return (
      <Bg>
        {/* <Background src='../../static/img/' /> */}
        <Wippo wippo='wippoGame.png' />
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <a href="http://game.wip.camp" target="_blank">
                <img alt="Gamecenter" src='../../static/img/gameCenteIcon.png' width="100%" height="100%" />
              </a>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
