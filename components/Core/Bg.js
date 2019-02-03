import styled from 'styled-components'

const Bg = styled.div`
  min-height: 100vh;
  background-repeat:no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;

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

export default Bg