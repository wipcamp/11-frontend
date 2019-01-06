import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../config/fonts'
import colors from '../config/color'

const BoxStyle = styled.section`
    padding : 4em;
    background: papayawhip;
    font-size : ${fonts.TextBox};
    color : ${colors.TextBox}
`
const TextBox = (props) => (
    <BoxStyle>{props.text}</BoxStyle>
)
export default TextBox