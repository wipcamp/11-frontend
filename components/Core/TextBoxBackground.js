import styled from 'styled-components'

const TextBoxBackground = styled.div`
    width: 950px;
    height: 500px;
    background: rgba(196, 196, 196, 0.4);
    @media (min-width:320px) {
        width: 20%;
        height: 20%;
    }
    @media (min-width:420px) {  
        width: 40%;
        height: 40%;
    }
    @media (min-width:576px) {
        width: 60%;
        height: 60%;
    }
    @media (min-width:768px) {
        width: 80%;
        height: 80%;
    }
    @media (min-width:1024px) {
        width: 100%;
        height: 100%;
    }
`

export default TextBoxBackground
