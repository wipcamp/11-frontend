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
  // console.log(response);
    // console.log(this.props.display)
this.props.handleState()
    const res = await axios.get('https://registrant.service.freezer.in.th/api/testloginjaa')
    console.log(res.data.status)
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