import React, { Component } from 'react'
import styled from 'styled-components'

const GameButton = styled.button`
  color: #fff;
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid #F7CA18;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  animation-duration : 0s;
  
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nfour;
  }
  &:hover:before {
    right: 0%;
    left: auto;
    width: 100%;
  }

  &:before {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    animation-duration : 0s;
  }
`
export default class Button extends Component {
  render() {
    return (
      <div>
        <GameButton>Game</GameButton>
      </div>
    )
  }
}
