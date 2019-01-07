import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const Headline = styled.p`
  font-size: ${font.Headlines};
  font-weight : bold;
  text-align : center;
`
export const Subtitle = styled.p`
  font-size : ${font.Subtitle};
`

export const TextBoxStyle = styled.p`
  font-size : ${font.TextBox};
  color : ${color.TextBox};
`
export default Headline