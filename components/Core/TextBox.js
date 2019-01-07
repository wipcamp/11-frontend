import React, { Component } from 'react'
import styled from 'styled-components'
import {TextBoxStyle} from './Texts'

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : center;
    padding-top : 2em;
    padding-bottom : 2em;
`
const TextBox = (props) => (
    <div className = "container-fluid">
        <div className = "row justify-content-center">
            <div className = "col-md-8 col-md-offset-4">
                <BoxStyle>
                    <TextBoxStyle>{props.text}</TextBoxStyle>
                </BoxStyle>
            </div>
        </div>
    </div>
)

export default TextBox