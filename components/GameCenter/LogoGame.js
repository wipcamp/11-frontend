import styled from 'styled-components'
export const LogoGameHover = styled.img`
  position: relative;
  width: 70%;
  z-index: 2;

  &:hover{
    content: url(${(props) => props.imagehover});
  }

  @media (min-width:320px) {
    width:100%;
  }
  @media (min-width:412px) {
    width:90%;
  }
  @media (min-width:576px) {
    width:100%;
  }
  @media (min-width:768px) {
    width:80%;
  }
  @media (min-width:1024px) {
    width:70%;
  }
`
export const LogoGame = styled.img`
  position: relative;
  width: 70%;
  z-index: 2;

  @media (min-width:320px) {
    width:100%;
  }
  @media (min-width:412px) {
    width:90%;
  }
  @media (min-width:576px) {
    width:100%;
  }
  @media (min-width:768px) {
    width:80%;
  }
  @media (min-width:1024px) {
    width:70%;
  }
`

export const Logo = styled.div`
  background-image: url(${props => props.LogoGame});
`
