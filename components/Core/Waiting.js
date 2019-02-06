import React from 'react'
import styled from 'styled-components'

const Bg = styled.div`
  background: #f8e9d6;
  background-image: url('../../static/img/MainHome_Wall.png');
  /* background-size:; */
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
  height: 100vh;
  font-family: 'Knewave', Tahoma;
`

const Logo = styled.img`
  width: 40em;
  height: auto;
  @media (min-width: 540px) {
    width: 55em;
  }
  @media (min-width: 960px) {
    width: 60em;
  }

  @media (min-width: 1140px) {
    width: 40em;
  }
`

class Waiting extends React.Component {
  render() {
    return (
      <Bg>
        <div className="container-fluid">
          <div className="container" />
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-12">
              <Logo
                className="mx-auto mt-3 mb-5 d-block"
                src="../../static/img/logo.png"
              />
              <h2 className="text-center">Comming Soon</h2>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}

export default Waiting
