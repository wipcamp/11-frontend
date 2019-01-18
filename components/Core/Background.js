import styled from 'styled-components'

const Background = styled.div`
  background-image:url(${props => props.bgImageUrl});
  min-height: 100vh;
  background-repeat:no-repeat;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default Background
