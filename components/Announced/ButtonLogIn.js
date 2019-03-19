import React, { Component } from 'react'
import styled from 'styled-components'

const After = styled.img`
filter: blur(3px);
`
const Button = styled.img`
content: url('../static/img/announce/FbLogin.png');
`

export default class componentName extends Component {
  render () {
    return (
      <div>
          <Button/>
      </div>
   )
  }
}