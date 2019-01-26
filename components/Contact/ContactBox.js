import React from 'react'
import styled from 'styled-components'
import { Paragraph , Font } from '../Core/Texts'

const Img = styled.img`
    content : url('../../static/img/social/${(props) => props.imgUrl}');
  width:2em;
  @media (min-width:992px) {
    width:3em;
  }
`

const ImgDiv = styled.div`
  display: inline-block;
`

const TextDiv = styled(ImgDiv)`
  @media (min-width:320px) {
    font-size: 0.8em;
  }
`

const TextA = styled.a`
  color:black;
  &:hover{
    text-decoration:none;
    color:black;
  }
`

const ContactBox = (props) => (
  <div>
    <ImgDiv>
      <a href={props.href}>
        <Img className="mr-2" imgUrl={props.imgUrl} />
      </a>
    </ImgDiv>
    <TextDiv>
      <Paragraph>
        <TextA href={props.href}>{props.text}</TextA>
      </Paragraph>
    </TextDiv>
  </div>
)

export default ContactBox
