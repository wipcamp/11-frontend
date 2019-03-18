import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:15vh;
  width:100%;

 `
export default class componentName extends Component {
  render () {
    return (
      <div>
        <Layer1 src = '/static/img/announce/door.png' />
  
      </div>
    )
  }
}