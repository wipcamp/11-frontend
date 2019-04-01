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
  MobileText,
  Button,
  Link } from './Responsive'

const Desktop = (props) => (
  <DesktopScripture discription={props.discription}> 
    <DesktopText>
    {props.text} <br /><br />
   <Link href="http://itim.wip.camp"><Button visible={props.visible}>ยืนยันสิทธิ์</Button></Link>
    </DesktopText>
  </DesktopScripture>
) 
const Mobile = (props) => (
  <MobileScripture>
    <Box className="row justify-content-center">
      <ImgBeforeEntrance before={props.before} src="/static/img/announce/_Scripture.png" />
      <ImgAfterEntrance display={props.display} src="/static/img/announce/_ScriptureFull.png" />
      <MobileText className="text-center" display={props.display}>
        {props.text} <br />
       <Button visible={props.visible}><Link href="http://itim.wip.camp">ยืนยันสิทธิ์</Link></Button>
      </MobileText>
    </Box>
  </MobileScripture>
)
const Animation = (props) => (
  <React.Fragment>
    <Desktop discription={props.discription} text={props.text} visible={props.visible}/>
    <Mobile display={props.display} text={props.text} before={props.before} visible={props.visible}/>
  </React.Fragment>
)
export default class Treatise extends Component {

  state = {
    discription: 'swing 1s linear infinite',
    display: 'hidden',
    before: 'visible'
  }

  handleState = (click) => { 
    if(click){
      this.setState({
        before: 'hidden',
        display: 'visible',
        discription: 'spin 3s linear forwards'
      })
      this.props.handleClick()
    } else {
      this.setState({
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
            onChange={this.props.click === true ? this.handleState(this.props.click) : ''}
            visible={this.props.visible}
          />
        </div>
      </div>
    )
  }
}
