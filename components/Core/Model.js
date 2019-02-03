import styled from 'styled-components'

const Model = styled.img`
    content:url('../../static/img/wippo/${props => props.wippo}');
    z-index:10;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    height: 20em;
    bottom: 0vh;
    left: 0;
    right: 0;
`

export default Model
