import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login'

const Button = styled.div`
position: absolute;
z-index:10;
bottom: 50vh;
border-radius: 5px;
`
const responseFacebook = (response) => {
  console.log(response);
}

export default class componentName extends Component {
  render () {
    return (
        <div className="row justify-content-center">
        <Button>
      <FacebookLogin
        appId="293604811359850"
        autoLoad={true}
        callback={this.responseFacebook}/>
      </Button>
      </div>
   )
  }
}