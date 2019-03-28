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
import { visible } from 'ansi-colors';

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
    discription: '',
    text : '',
    before: '',
    display : '',
  }

  handleState = (click, text) => { //check login
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
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}