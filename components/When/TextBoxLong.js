import React from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Core/Texts'

const Box = styled.span`
    /* padding : 0.5em 2em; */
    width:100%;
    height:100%;
`

const TextBoxLong = (props) => (
  <Box>
    <Paragraph>{props.text}</Paragraph>
    <Paragraph>{props.textday}</Paragraph>
  </Box>
)

export default TextBoxLong
