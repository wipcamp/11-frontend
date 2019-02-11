import React from 'react'
import styled from 'styled-components'
import { Paragraph, Font } from '../Core/Texts'

const Img = styled.img`
  /* content : url(${(props) => props.imgUrl}); */
  @media (min-width:320px) {
    width:18px;
    height:18px;
  }
  @media (min-width:576px) {
    width:2.5em;
    height:2.5em;
  }
`

const ImgDiv = styled.div`
  display: inline-block;
`

const TextA = styled.a`
  font-size: 16px;
  color:black;
  &:hover{
    text-decoration:none;
    color:black;
  }
`

const ContactBox = (props) => (
  <ImgDiv className="ml-0 mr-0" >
    <a href={props.href}>
      <Img src={props.imgUrl} />
    </a>
    <ImgDiv className="pl-2">
      <Paragraph>
        <TextA href={props.href}>{props.text}</TextA>
      </Paragraph>
    </ImgDiv>
  </ImgDiv>
)

export default ContactBox
