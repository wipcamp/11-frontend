import React, { Component } from 'react'
import styled from 'styled-components'

const Map = styled.img`
  width:50%;
  margin-top : 3%;
  margin-bottom: 5%; 
  justify-content: center;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:320px) {
    width:90%;
  }
  @media (min-width:412px) {
    width:50%;
    margin-top : 6%;
    margin-bottom: 0%; 
  }
`
export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Map src = 'static/img/Map22.png' alt = "map"/>
          </div>
        </div>
      </div>
    )
  }
}
