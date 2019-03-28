import styled from 'styled-components'

export const DesktopResponsive = styled.div`
  @media (min-width : 320px) {
    display:none;
  }
  @media (min-width : 769px){
    display:block;
  }
  /* iPad 9.7" */
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:none;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:block;
  }
  /* iPad Pro 2017 10.5" */
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:block;
  }
  /* iPad Pro 2017 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:block;
  }
  /* iPad Pro 2018 11" */
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:block;
  }
  /* iPad Pro 2018 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:block;
  }
  /* ipad Mini Portrait */
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:none;
  }

  /* ipad Mini Landscape */
  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:none;
  }
`

export const MobileResponsive = styled.div`
  @media (min-width : 320px) {
    display:block;
  }
  @media (min-width : 768px){
    display:none;
  }
  @media (min-width : 768px){
    display:none;
  }
  /* iPad 9.7" */
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:block !important;
   }
   @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:block !important;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:none !important;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:block !important;
  }
  /* iPad Pro 2017 10.5" */
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:block !important;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:none !important;
  }
  /* iPad Pro 2017 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:none !important;
  }
  /* iPad Pro 2018 11" */
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:block !important;
  }
   @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:none !important;
  }
  /* iPad Pro 2018 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:none !important;
  }
   /* ipad Mini Portrait */
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:block !important;
  }
  /* ipad Mini Landscape */
  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:block !important;
  }
`

export const ImgBefore = styled.img`
  @media (min-width:320px) {
    bottom: -36vh;
    width: 150px;
  }
  @media (min-width:375px) {
    width: 170px;
  }
  @media (min-width:768px) {
    bottom: -28vh;
    width: auto;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1367px) and (orientation: portrait) {
    bottom: -27vh;
    width: 400px;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    bottom: -36vh;
    width: 300px;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    bottom: -45vh;
    width: 270px;
  }
`

export const Shadow = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 0vh;
  width:100%;
  @media (min-width: 320px) { 
    bottom:0vh;
    width:61%;
  }
  @media (min-width: 1025px) { 
    bottom:0vh;
    width:26.3%;
  }
  @media (min-width: 1366px) { 
    bottom:2vh;
    width:31%;
  }
  @media (min-width: 1367px) { 
    bottom:0vh;
    width:26.3%;
  }
`

export const Linen = styled.img`
  position: absolute;
  z-index: 5;
  bottom: 0vh;
  width:100%;
  @media (min-width: 320px) { 
    bottom:19vh;
    width:70%;
  }
  @media (min-width: 768px) { 
    bottom:25vh;
    width:70%;
  }
  @media (min-width: 1025px) { 
    bottom:27vh;
    width:35%;
  }
`

export const Box = styled.div`
   position:absolute;
   @media (min-width:320px) {
    left: 2vw;
    right:2vw;
    top:40vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    top:20vh;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    top:30vh;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    top:20vh;
  }
   @media only screen and (min-width: 1194px) and (max-height: 835px) {
    top:20vh;
  }
`

export const MobileTextResponsive = styled.span`
    @media (min-width : 320px) {
    padding-top:3.4em;
    padding-bottom:3.4em;
    padding-left:1.5em;
    padding-right:1.5em;
    font-size:0.8em;
    width: 200px;
  }
  @media (min-width : 414px) {
    padding-top:3.9em;
  }
  @media (min-width : 768px) {
    padding-top:3.5em;
    padding-left:1em;
    padding-right:1em;
    font-size:1.5em;
    width: 300px;
  }
`

export const Base = styled.img`
  position: absolute;
  z-index: 4;
  bottom: 0vh;
  width:100%;
  
  @media (min-width: 320px) { 
    bottom:3vh;
    width:70%;
  }
  @media (min-width: 1025px) { 
    bottom:5vh;
    width:30%
  }
  @media (min-width: 1366px) { 
    bottom:6vh;
    width:35%
  }
  @media (min-width: 1367px) { 
    bottom:5vh;
    width:30%
  }
`
