import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.p`
  font-size: ${font.Headline};
  font-weight : bold;
  font-family: 'Sarabun', sans-serif;
`
export const Subtitle = styled.p`
  font-size : ${font.Subtitle};
  font-family: 'Sarabun', sans-serif;
`

export const ParagraphBold = styled.p`
  font-size :${font.Paragraph};
  font-weight : bold;
  font-family: 'Sarabun', sans-serif;
`

export const Paragraph = styled.p`
  font-size :${font.Paragraph};
  font-family: 'Sarabun', sans-serif;
`

export const Small = styled.p`
  font-size : ${font.Small};
  font-family: 'Sarabun', sans-serif;
`

export const TextBoxStyle = styled.p`
  font-size : ${font.TextBox};
  color : ${color.TextBox};
  font-family: 'Sarabun', sans-serif;
`
export default Headline