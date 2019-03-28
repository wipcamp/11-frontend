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
  componentWillReceiveProps(nextProps){
    if(this.props.click != nextProps.click){
      this.handleState(nextProps.click);
    }
    if(this.props.text != nextProps.text){
      this.handleState(nextProps.text)
    }
  }
  
  componentDidMount(props){
    const click = this.props.click;
    let text = this.props.text;
    this.handleState(click, text);
  }

  state = {
    discription: [
      'swing 1s linear infinite', //destop before login
      'spin 3s linear forwards' // desktop after login mobile don't have animation 
    ],
    text : '',
    display : [
      'hidden', //moblie before login
      'visible' //moblie after login
    ],
    before:[
      'visible', //moblie before login
      'hidden' //moblie after login
    ],
    textcount: 0, //location in array to change text
    count: 0, //location in array both of mobile and desktop
  }

  handleState = (click, text) => { //check login
    if (click === true) { //if login success change count to one and change animation on desktop or show on mobile(iPad)
      this.setState({
        count: 1
      })
    }
    else if (click === false) {
      this.setState({ //if login fail don't play animation on desktop or don't show on mobile(iPad)
        count: 0
      })
    }
  }
  render() {
    return(
      <React.Fragment>
        <div className="row justify-content-center" id="background">
          <Base src='../../static/img/announce/_Scripture base.png' />
          <Shadow src='../../static/img/announce/Scripturebaseshadow.png' />
          <Linen src='../../static/img/announce/linen.png' />
        </div>
        <div className="row justify-content-center">
          <Animation 
            discription={this.state.discription[this.state.count]}
            display = {this.state.display[this.state.count]}
            before={this.state.before[this.state.count]}
            text = {this.props.text}
          />
        </div>
      </React.Fragment>
    )
  }
}