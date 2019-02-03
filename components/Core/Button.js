import styled from 'styled-components'

const GameButton = styled.img`
  max-height: 50px;
  cursor: pointer;transform: scale(1);
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
export default GameButton
