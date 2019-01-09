import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
transform: scale(1);
	transition: .3s ease-in-out;
  &:hover img {
	  transform: scale(1.3);
  }
`

const Logo = (props) => (
  <Divhover>
    <img src={props.img} width="87px" height="87px" />
  </Divhover>
)

export default Logo
