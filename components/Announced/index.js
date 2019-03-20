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
import Button from '../Announced/ButtonLogIn'
const Blur =styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  filter: blur(3px);
`
export default class componentName extends Component {
  render () {
    return (
      <Div>
        {/* <Button/> */}
        <Blur>
        <Background />
        <Treatise/>
        </Blur>
      </Div>
    )
  }
}
