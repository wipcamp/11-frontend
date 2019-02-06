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
background: rgba(248, 233, 214, 0.73);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width:320px) {
    padding : 0em 0em 0.5em;
    margin : 0.5em 0.5em ;
  }
   @media (min-width:576px) {
    padding : 1em 2em;
  }
  @media (min-width:1024px) {
    padding : 0.5em 5em 2em;
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
    width:3em;
  }
  @media (min-width:420px) {
    margin-top: 2%;
    width:3em;
  }
  @media (min-width:576px) {
    margin-top: 2%;
    width:4em;
  }
  @media (min-width:768px) {
    margin-top: 5%;
    width:5em;
  }
  @media (min-width:1024px) {
    margin-top: 5%;
    padding: .2em;
    width:5em;
  }
`
export const TextBoxWho = styled.div`
  background: #CDB4A2;
  border-radius: 10px;

  @media (min-width:320px) {
    padding : 0.35em 0.35em;
    margin : 0.3em 0em ;
  }
  @media (min-width:412px) {
    padding : 1em 1em;
    margin : 0.4 0em ;
  }
   @media (min-width:576px) {
    padding : 1em 2em;
  }
  @media (min-width:768px) {
    padding : 1em 1em;
    margin : 0.5 0.5em ;
  }
  @media (min-width:1024px) {
    padding : 0.5em;
    margin : 0.3em 0.5em ;
  }
`
export const IconWho = styled.img`
  @media (min-width:320px) {
    width: 45px;
    height: 45px;
  }
  @media (min-width:412px) {
    width: 65px;
    height: 65px;
  }

  @media (min-width:1024px) {
    width: 70px;
    height: 70px;
   
    
  }
 `
