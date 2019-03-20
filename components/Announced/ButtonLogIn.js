import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login';

const After = styled.img`
filter: blur(3px);
`
const Button = styled.img`
position: absolute;
z-index:20;
bottom: 50vh;
width: 30%;
`
const responseFacebook = (response) => {
  console.log(response);
}

export default class componentName extends Component {
  render () {
    return (
        <div className="row justify-content-center">
        <FacebookLogin
          scope="email"
          autoLoad={true}
          fields="name,email,picture,id"
          appId="1088597931155576"
          callback={responseFacebook}
          render={renderProps => (
          <Button onClick={renderProps.onClick} alt="Facebook Login" src='../static/img/announce/Button_Facebook.png'/>
          )}
          />
      </div>
   )
  }
}