import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.p`
  font-size: ${font.Headline};
  font-weight : bold;
`
export const Subtitle = styled.p`
  font-size : ${font.Subtitle};
`

export const ParagraphBold = styled.p`
  font-size :${font.Paragraph};
  font-weight : bold;
`

export const Paragraph = styled.p`
  font-size :${font.Paragraph};
`

export const Small = styled.p`
  font-size : ${font.Small};
`

export const TextBoxStyle = styled.p`
  font-size : ${font.TextBox};
  color : ${color.TextBox};
`
export default Headline