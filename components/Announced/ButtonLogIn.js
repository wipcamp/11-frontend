import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
const Button = styled.div`
position: absolute;
z-index:10;
bottom: 50vh;
border-radius: 5px;
display: ${props => props.display};
`
export default class componentName extends Component {
responseFacebook = async (response) => {    
    const res = await axios.post('https://auth.service.wip.camp/api/auth/login',{
      'provider_name': 'facebook',
      'provider_id': response.userID,
      'accessToken': response.accessToken,
    })
    this.props.handleState(await res.data.role)
  }
  render () {
    return (
        <div className="row justify-content-center">
        <Button display={this.props.display}>
      <FacebookLogin
        appId="293604811359850"
        autoLoad={false}
        callback={this.responseFacebook}/>
      </Button>
      </div>
   )
  }
}