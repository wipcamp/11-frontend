import styled from 'styled-components'

const Model = styled.div`
    content:url(${props => props.wippo});
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10em;
    @media(min-width: 320px) {
        width: 5em;
    }
    @media(min-width: 420px) {
        width: 7em;
    }
    @media(min-width: 576px) {
        width: 7em;
    }
    @media(min-width: 768px) {
        width: 10em;
    }
    @media(min-width: 1024px) {
        width: 10em;
    }
`

export default Model
