import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
  transform: scale(1);
  transition: .3s ease-in-out;
  &:hover img {
    transform: scale(1.3);
  }
`
const Img = styled.img`
    width:5em;
    @media (min-width:320px) {
      width:2.5em;
    }
    @media (min-width:420px) {
    
      width:5em;
    }
    @media (min-width:576px) {
      margin-top: 2%;
      width:5em;
    }
    @media (min-width:768px) {
      margin-top: 5%;
      width:5em;
    }
    @media (min-width:1024px) {
      margin-top: 5%;
      width:5em;
    }
`

const Logo = (props) => (
  <Divhover>
    <a href={props.link} target="_blank"><Img src={props.img} /></a>
  </Divhover>
)

export default Logo
