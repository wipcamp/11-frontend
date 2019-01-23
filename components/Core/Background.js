import styled from 'styled-components'

const Background = styled.div`
  background-image:url(${props => props.bgImageUrl});
  min-height: 100vh;
  background-repeat:no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top:2em;
  @media(min-width:769px) {
    padding-top:4em;
  }
`
export default Background
