import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login';
const Button = styled.img`
position: absolute;
z-index:10;
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
        {/* <FacebookLogin
          scope="email"
          autoLoad={true}
          fields="name,email,picture,id"
          appId="293604811359850"
          callback={responseFacebook}
          render={renderProps => ( */}
          <Button alt="Facebook Login" src='../static/img/announce/Button_Facebook.png'/>
          {/* // )}
          // /> */}
      </div>
   )
  }
}