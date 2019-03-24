import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login'

const Button = styled.div`
position: absolute;
z-index:10;
bottom: 50vh;
border-radius: 5px;
display: ${props => props.display};
`
const Blur =styled.div`
  position: absolute;
  z-index: 9;
  opacity: 0.8;
  filter: blur(3px);
`
export default class componentName extends Component {
  responseFacebook = (response) => {
    // console.log(response);
    // console.log(this.props.display)
    this.props.handleState()
    
  }
  render () {
    return (
        <div className="row justify-content-center">
        <Button display={this.props.display}>
      <FacebookLogin
        appId="293604811359850"
        autoLoad={false}
        callback={this.responseFacebook}/>
      </Button>
      </div>
   )
  }
}