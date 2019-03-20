import React, { Component } from 'react'
import styled from 'styled-components'
import Bg from '../Core/Bg'
import Background from '../Announced/background'
import Treatise from '../Announced/Treatise'
import Button from '../Announced/ButtonLogIn'
import Minisize from '../Core/Minisize'

const Div = styled.div`
height:100vh;
position: relative;
  overflow-x:hidden;
  overflow-y:hidden;
`
const Blur =styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  filter: blur(3px);
`
export default class componentName extends Component {
  render () {
    return (
      <React.Fragment>
        <Minisize />
        <Div>
          <Button/>
          <Background />
          <Treatise/>
        </Div>
      </React.Fragment>
    )
  }
}
