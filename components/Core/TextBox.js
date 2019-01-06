import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../config/fonts'
import colors from '../config/color'

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : center;
    padding-top : 2em;
    padding-bottom : 2em;
`
const TextStyle = styled.p`
    font-size : ${fonts.TextBox};
    color : ${colors.TextBox};

`
const TextBox = (props) => (
    <div className = "container-fluid">
        <div className = "row justify-content-center">
            <div className = "col-md-8 col-md-offset-4">
                <BoxStyle>
                    <TextStyle>{props.text}</TextStyle>
                </BoxStyle>
            </div>
        </div>
    </div>
)

export default TextBox