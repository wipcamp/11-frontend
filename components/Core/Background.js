import styled from 'styled-components'

const Background = styled.div`
	background-image:url(${props => props.bgImageUrl});
  height:100%;
  background-repeat:no-repeat;
`
export default Background
