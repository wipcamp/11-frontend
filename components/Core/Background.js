import styled from 'styled-components'

const Background = styled.div`
  background-image:url(${props => props.bgImageUrl});
  min-height: 100vh;
  background-repeat:no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top:2em;

  @media(min-width:320px) {
    padding-top:4em;
    background-size: 160%;
    background-position-y: 100%;
    
  }
 
`
export default Background
