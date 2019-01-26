import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.div`
  font-size: ${font.Headline};
  font-weight : bold;
  text-align : center;
`
export const Subtitle = styled.div`
  font-size : ${font.Subtitle};
  
`

export const ParagraphBold = styled.div`
  font-size :${font.Paragraph};
  font-weight : bold;
  
`

export const Paragraph = styled.div`
  font-size :${font.Paragraph};
  
`

export const Small = styled.div`
  font-size : ${font.Small};
  
`

export const TextBoxStyle = styled.div`
  font-size : ${font.TextBox};
  color : ${color.TextBox};
  
`

export const Font = styled.div`
color : #3A1E12;

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

export const FontWho = styled.p`
color : #3A1E12;

  @media (min-width:320px) {
    margin-left : 8px;
    margin-top : 2px;
    font-size: 12px;
  }
  @media (min-width:412px) {
    font-size: 14px;
    margin-left : 20px;
    margin-top : 10px;
  }
  @media (min-width:576px) {
    font-size: 15px;
    margin-left : 20px;
    margin-top : 5px;
  }
  @media (min-width:768px) {
    font-size: 15px;
    margin-left : -25px;
    margin-top : 10px;
  }
  @media (min-width:1024px) {
    font-style: normal;
    font-size: 16px;
    margin-left : -25px;
    margin-top : 13px;
  }
`

export default Headline
