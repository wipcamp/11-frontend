import styled from 'styled-components'

const Button = styled.button`
  width: 8vw;
  height: 8vw;
  min-width: 75px;
  min-height: 75px;
  left: 3vw;
  top: 3vh;
  border-radius: 50%; 
  background-color: #C63939;
  position: fixed;
  z-index:10;
  cursor: pointer;
  color:white;
  &:hover{
    background-color:red;
  }

`

export default Button