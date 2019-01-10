import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Fbfeed from './Fbfeed'

const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
    padding:0;
`

const FbBox = styled.div`
    @media (min-width:320px) {
      width:4em;
    }
    @media (min-width:420px) {
    
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

export default class index extends Component {
  render () {
    return (
      <div className="container p-5">
        <BoxStyle className="row justify-content-center">
          <FbBox className="p-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Fbfeed />
          </FbBox>
          <div className="w-auto"></div>
          <div className="pl-auto pr-auto col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <Logo img="../../static/img/social/instagram.png" />
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <Logo img="../../static/img/social/instagram.png" />
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <Logo img="../../static/img/social/instagram.png" />
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <Logo img="../../static/img/social/instagram.png" />
              </div>
            </div>
            {/* <div class="w-auto"></div> */}
          </div>
        </BoxStyle>
      </div>
    )
  }
}
