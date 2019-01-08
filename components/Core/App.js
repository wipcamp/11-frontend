import React, { Component } from 'react'
import styled from 'styled-components'
import What from '../What/index'
import Who from '../Who/index'
import Navbar from './Navbar';

const Relative = styled.div`
  position:relative;
`
export default class App extends Component {
  render() {
    return (
      <div>
        <Relative>
          <Navbar />
          <What />

        </Relative>
      </div>
    )
  }
}

