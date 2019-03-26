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
  opacity: 0.8;
  filter: blur(${props => props.filter}px);

`
export default class componentName extends Component {
  state = {
    display: "block",
    filter: 3,
    click:false,
    text:0
  }
  handleState= () => {
    this.setState({
    display: 'none', 
    filter: 0,
    click:true,
    text:1
  })}
  render () {
    return (
      <React.Fragment>
        <Minisize />
        <Div>
          <Button display={this.state.display} handleState={this.handleState}/>
          <Blur filter={this.state.filter}>
          <Background />
          <Treatise click={this.state.click} text={this.state.text}/>
          </Blur>
        </Div>
      </React.Fragment>
    )
  }
}
