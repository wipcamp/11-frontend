import React from 'react'
import styled from 'styled-components'

import { FontFAQs } from '../Core/Texts'

const Box = styled.div`
    /* padding : 0.5em 2em; */
    width:100%;
    height:100%;
`

const TextBoxLong = (props) => (
  <Box>
    <FontFAQs>{props.text}</FontFAQs>
    <FontFAQs>{props.dangerouslySetInnerHTML.__html}</FontFAQs>
  </Box>
)

export default TextBoxLong
