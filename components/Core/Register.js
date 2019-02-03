import styled from 'styled-components'

const Button = styled.div`
  width: 8vw;
  height: 8vw;
  min-width: 75px;
  min-height: 75px;
  left: 3vw;
  top: 3vh;
  background-image: url('static/img/sun.png');
  background-size: cover;
  position: fixed;
  z-index:10;
  cursor: pointer;
  color:white;
  transition: transform .2s;
  &:hover{
    transform: scale(1.1);
  }
`

export default Button