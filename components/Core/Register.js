import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 5em;
  width: 5em;
  border-radius: 50%; 
  background-color: red;
  position: fixed;
  z-index:10;
  margin: 2em; 
  cursor: pointer;

  &:hover{
    background-color:blue;
    color:white;
  }
`
export default class Register extends Component {
  render() {
    return (
      <div>
        <Button>Register</Button>
      </div>
    )
  }
}
