import styled from 'styled-components'

const Button = styled.button`
  width: 11vw;
  height: 11vw;
  max-width: 100px;
  max-height: 100px;
  left: 3vw;
  top: 3vh;
  border-radius: 50%; 
  background-color: #C63939;
  position: fixed;
  z-index:10;
  cursor: pointer;

  &:hover{
    background-color:red;
    color:white;
  }
`

export default Button