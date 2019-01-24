import styled from 'styled-components'

// Call styled(Name of const) ex styled(MTBox)` //Can Override in here `

export const MTBox = styled.div`
    @media (min-width:320px) {
        margin-top:1.5em;
    }
    @media (min-width:420px) {
        margin-top:1.5em;
    }
    @media (min-width:576px) {
        margin-top:3em;
    }
    @media (min-width:768px) {
        margin-top:3em;
    }
    @media (min-width:1024px) {
        margin-top:5em;
    }
`

export const PDBox = styled.div`
  background: rgba(196, 196, 196, 0.73);
  @media (min-width:320px) {
    padding : 1.5em 1em;
    margin : 2em 0.5em ;
  }
   @media (min-width:576px) {
    padding : 1em 2em;
  }
  @media (min-width:1024px) {
    padding : 2em 5em;
  }
`

export const WDBox = styled.div`
    @media (min-width:320px) {
        width:4em;
    }
    @media (min-width:420px) {  
      width:5em;
    }
    @media (min-width:576px) {
      width:5em;
    }
    @media (min-width:768px) {
      width:7em;
    }
    @media (min-width:1024px) {
      width:7em;
    }
`
export const IconBox = styled.img`
  @media (min-width:320px) {
    width:4em;
  }
  @media (min-width:420px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:576px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:768px) {
    margin-top: 5%;
    width:7em;
  }
  @media (min-width:1024px) {
    margin-top: 5%;
    padding: .2em;
    width:7em;
  }
`
