import React, { Component } from 'react'
import { 
  DesktopScripture,
  DesktopText, 
  MobileScripture, 
  ImgBeforeEntrance,
  ImgAfterEntrance, 
  Base, 
  Shadow,
  Linen,
  Box,
  MobileText } from './Responsive'

const Desktop = (props) => (
  <DesktopScripture discription={props.discription}> {/* porps send change animation or don't */}
    <DesktopText>{props.text}</DesktopText> {/* change text */}
  </DesktopScripture>
) 
const Mobile = (props) => (
  <MobileScripture>{/* props send none and block and show or don't show  */}
    <Box className="row justify-content-center">
      <ImgBeforeEntrance before={props.before} src="/static/img/announce/_Scripture.png" />
      <ImgAfterEntrance display={props.display} src="/static/img/announce/_ScriptureFull.png" />
      <MobileText display={props.display}>{props.text}</MobileText>
    </Box>
  </MobileScripture>
)
const Animation = (props) => (
  <React.Fragment>
    <Desktop discription={props.discription} text={props.text} />
    <Mobile display={props.display} text={props.text} before={props.before} />
  </React.Fragment>
)
export default class Treatise extends Component {
  
  componentDidMount(){
    let text = this.props.text;
    // this.interval = setInterval(() => {
    //   if (this.props.click != false) {
    //     this.setState({
    //       click: true,
    //     })
    //     clearInterval(this.interval);
    //     this.handleState(this.state.click);
    //   } else if (this.props.click == false) {
    //     this.setState({
    //       click: false
    //     })
    //   }
    // }, 2000);
    // this.handleState(this.props.click);
    
    // console.log(this.props.click);
  }

  state = {
    discription: 'swing 1s linear infinite',
    display: 'hidden',
    before: 'visible',
    click : false,
  }

  handleState = (click) => { //check login
    
    // console.log(this.props.click);
    if (click === true) { //if login success change count to one and change animation on desktop or show on mobile(iPad)
      this.setState({
        before: 'hidden',
        display: 'visible',
        discription: 'spin 3s linear forwards'
      })
    }
    else if (click === false) {
      this.setState({ //if login fail don't play animation on desktop or don't show on mobile(iPad)
        before: 'visible',
        display: 'hidden',
        discription:'swing 1s linear infinite'
      })

    }
  }
  render() {
    return(
      <div >
        <div className="row justify-content-center" id="background">
          <Base src='../../static/img/announce/_Scripture base.png' />
          <Shadow src='../../static/img/announce/Scripturebaseshadow.png' />
          <Linen src='../../static/img/announce/linen.png' />
        </div>
        <div className="row justify-content-center">
          <Animation 
            discription={this.state.discription}
            display = {this.state.display}
            before={this.state.before}
            text = {this.props.text}
          />
        </div>
      </div>
    )
  }
}