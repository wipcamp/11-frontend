import styled from 'styled-components'

const Wippo = styled.img`
  content:url('../../static/img/wippo/${props => props.wippo}');
  position: absolute;
  z-index: 10;
  bottom: 0vh;
  height: 25em;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

export default Wippo