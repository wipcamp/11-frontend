import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.p`
  font-size: ${font.Headline};
  font-weight : bold;
  text-align : center;
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

export const Font = styled.p`
  @media (min-width:320px) {
    font-size: 0.8em;
  }
  @media (min-width:412px) {
    font-size: 0.9em;
  }
  @media (min-width:576px) {
    font-size: 1em;
  }
  @media (min-width:768px) {
    font-size: 1.1em;
  }
  @media (min-width:1024px) {
    font-size: 1.2em;
  }
`

export default Headline
