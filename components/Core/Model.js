import styled from 'styled-components'

const Model = styled.div`
    content:url('../../static/img/wippo/${props => props.wippo}');
    display: block;
    z-index:10;
    margin-left: auto;
    margin-right: auto;
    width: 10em;

    @media(min-width: 320px) {
        margin-top: -5em;
        width: 5em;
    }
    @media(min-width: 420px) {
        margin-top: -6em;
        width: 7em;
    }
    @media(min-width: 576px) {
        margin-top: -6em;
        width: 7em;
    }
    @media(min-width: 768px) {
        margin-top: -7em;
        width: 10em;
    }
    @media(min-width: 1024px) {
        margin-top: -10em;
        width: 18em;
    }
`

export default Model
