import React, { Component } from 'react'
import styled from 'styled-components'
import Bg from '../Core/Bg'
import Background from '../Announced/background'
import Treatise from '../Announced/Treatise'
// import Button from '../Announced/ButtonLogIn'

const Div = styled.div`
  overflow-x:hidden;
  overflow-y:hidden;
`

export default class componentName extends Component {
  render () {
    return (
      <Div>
        {/* <Button/> */}
        <Background />
        <Treatise/>
      </Div>
    )
  }
}
