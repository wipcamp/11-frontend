import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    &:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
    }
`

const Logo = (props) =>(
	<Divhover>

		<img src={props.img} width="87px" height="87px" />
	</Divhover>
)

export default Logo