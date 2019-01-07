import styled from 'styled-components'

const Background = styled.div`
    background-image:url(${props => props.bgImageUrl});
    height:1000px;
    background-repeat:no-repeat;
`
export default Background
