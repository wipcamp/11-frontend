import styled from 'styled-components'

const Wippo = styled.img`
  content:url('../../static/img/wippo/${props => props.wippo}');
  position: absolute;
  z-index: 10;
  bottom: -5vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  @media (min-width:320px) {
    height: 35vh;
  }
   @media (min-width:576px) {
    height: 40vh;
  }
  @media (min-width:1024px) {
    height: 50vh;
  }
`
export const WippoFAQ = styled.img`
  content:url('../../static/img/wippo/${props => props.wippo}');
  position: absolute;
  bottom: -5vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  @media (min-width:320px) {
    height: 35vh;
  }
   @media (min-width:576px) {
    height: 40vh;
  }
  @media (min-width:1024px) {
    height: 50vh;
  }
`

export default Wippo