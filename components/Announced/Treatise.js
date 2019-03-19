import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Base = styled.img`
position: absolute;
z-index: 4;
bottom: 12.5vh;
`
const Shadow = styled.img`
position: absolute;
z-index: 3;
bottom: 0vh;
`
const Linen = styled.img`
position: absolute;
z-index: 5;
bottom: 42.8vh;
`
const swing = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate3d(0, 0, 1, -5deg);
  }
`

const Scripture = styled.img`
position: absolute;
z-index: 6;
bottom: 54vh;
animation: ${swing} 0.5s infinite;
`
 
export default class componentName extends Component {
  render () {
    return (

      <div className="row justify-content-center">
        <Base src='../../static/img/announce/_Scripture base.png' />
        <Shadow src='../../static/img/announce/_Scripture base shadow.png' />
        <Linen src='../../static/img/announce/linen.png' />
        <Scripture src='../../static/img/announce/_Scripture.png' />
      </div>
    )
  }
}
