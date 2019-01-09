import React, { Component } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
width : 70em;
height : 20em;
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
