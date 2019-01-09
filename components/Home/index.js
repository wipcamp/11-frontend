import React, { Component } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin-top: 0vh;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
    width: 55%;
  }
`
export default class componentName extends Component {
  render () {
    return (
      <div className = "text-center">
        <Logo src="static/img/LogoCana.png" alt=" WIP Camp #11 ,คณะเทคโนโลยีสารสนเทศ , มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " />
      </div>
    )
  }
}
