import styled from 'styled-components'

const Background = styled.div`
  background-image:url(${props => props.bgImageUrl});
  background-repeat:no-repeat;
  
  @media(min-width:320px) {
    padding-top:1.5em;
    background-size: 160%;
    background-position-y: 100%;
  }
  @media(min-width:1024px) {
    min-height: 100vh;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    padding-top:2em;
  }
`
export default Background
