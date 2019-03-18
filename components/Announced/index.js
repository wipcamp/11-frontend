import React, { Component } from 'react'
import styled from 'styled-components'
import Bg from '../Core/Bg'
import Background from '../Announced/background'


export default class componentName extends Component {
  render () {
    return (
      <Bg>
        <Background>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <img src='../../static/img/announce/_Scripture base.png' />
              </div>
            </div>
          </div>
        </Background>
      </Bg>
    )
  }
}
