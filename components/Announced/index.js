import React, { Component } from 'react'
import styled from 'styled-components'
import Bg from '../Core/Bg'
import Background from '../Announced/background'
import Treatise from '../Announced/Treatise'
import Button from '../Announced/ButtonLogIn'

export default class componentName extends Component {
  render () {
    return (
      <React.Fragment>
        <Button/>
        <Background />
        <Treatise/>
      </React.Fragment>
    )
  }
}
