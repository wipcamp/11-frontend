import React, { Component } from 'react'
import styled from 'styled-components'
import {TextBoxStyle} from './Texts'
import {NextButton ,PreviousButton} from './MainButton'

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : center;
    padding-top : 2em;
    padding-bottom : 2em;
    position: absolute;
    display:block;
    width:100%;
    max-width: 700px;

    @media(max-width:1024px){
        max-width : 650px;
    }
`
const TextBox = (props) => (
    <div className = "container-fluid">
        <div className = "row justify-content-center">
                <BoxStyle>
                    <NextButton src = 'static/img/button.png'  />
                    <PreviousButton src = 'static/img/button.png'  />
                    <TextBoxStyle>{props.text}</TextBoxStyle>
                </BoxStyle>
            
        </div>
    </div>
)

export default TextBox