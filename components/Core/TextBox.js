import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, {TextBoxStyle, Subtitle} from './Texts'
import {NextButton , PreviousButton} from './MainButton'

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : center;
    padding : 2em 5em;
    position: absolute;
    display:block;
    width:100%;
    height:400px;

    @media (min-width:320px) {
        font-size: 0.9em;
        max-width : 300px;
    }
    @media (min-width:412px) {
        font-size: 1em;
        max-width : 300px;
    }
    @media (min-width:576px) {
        font-size: 1.1em;
        max-width : 550px;
    }
    @media (min-width:768px) {
        font-size: 1.2em;
    }
    @media (min-width:1024px) {
        font-size: 1.3em;
        max-width : 800px;
    }
`

const Font = styled.p`
`
const TextBox = (props) => (
    <div className = "container-fluid">
        <div className = "row justify-content-center">
                <BoxStyle>
                    <Headline>What</Headline>
                    <Subtitle>ค่ายนี้คืออะไร ?</Subtitle>
                    <TextBoxStyle>{props.text}</TextBoxStyle>
                </BoxStyle>
            
        </div>
    </div>
)

export default TextBox