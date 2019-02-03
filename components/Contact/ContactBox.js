import React from 'react'
import styled from 'styled-components'
import { Paragraph, Font } from '../Core/Texts'

const Img = styled.img`
  content : url('../../static/img/social/${(props) => props.imgUrl}');
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
  color:black;
  &:hover{
    text-decoration:none;
    color:black;
  }
  @media (min-width:320px) {
    font-size: 12px;
  }
  @media (min-width:576px) {
    font-size: 16px;
  }
`

const ContactBox = (props) => (
  <ImgDiv>
    <a href={props.href}>
      <Img className="mr-1" imgUrl={props.imgUrl} />
    </a>
    <ImgDiv>
      <Paragraph>
        <TextA href={props.href}>{props.text}</TextA>
      </Paragraph>
    </ImgDiv>
  </ImgDiv>
)

export default ContactBox
