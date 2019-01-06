import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-image:url(${props => props.bgimg});
    height:1000px;
    background-repeat:no-repeat;
`

const Background = (props) => (
    <Div bgimg={props.bg}>

    </Div>
)

export default Background