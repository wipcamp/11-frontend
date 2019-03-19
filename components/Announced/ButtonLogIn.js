import React, { Component } from 'react'
import styled from 'styled-components'

const After = styled.img`
filter: blur(3px);
`
const Button = styled.img`
position: absolute;
z-index:10;
bottom: 50vh;
width: 30%;
`

export default class componentName extends Component {
  render () {
    return (
        <div className="row justify-content-center">
          <Button alt="Facebook Login" src='../static/img/announce/Button_Facebook.png'/>
      </div>
   )
  }
}