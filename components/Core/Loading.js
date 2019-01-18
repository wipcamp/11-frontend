import React, { Component } from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: 100vh;
  background-color: papayawhip;
`

const Position = styled.p`
  padding-top:50vh;
`
export default class Loading extends Component {
  render () {
    return (
      <Background>
        <div className = "container">
          <div className=" row justify-content-center align-items-center">
            <Position>
              Loading ..
            </Position>
          </div>
        </div>
      </Background>
    )
  }
}
