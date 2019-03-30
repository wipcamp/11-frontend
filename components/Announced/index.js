import React, { Component } from 'react'
import styled from 'styled-components'
import Bg from '../Core/Bg'
import Background from '../Announced/background'
import Treatise from '../Announced/Treatise'
import Button from '../Announced/ButtonLogIn'
import Minisize from '../Core/Minisize'

const Div = styled.div`
  height:100vh;
  position: relative;
  overflow-x:hidden;
  overflow-y:hidden;
`
const Blur = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  filter: blur(${props => props.filter}px);
`
export default class componentName extends Component {
  state = {
    display: "block",
    filter: 3,
    click: false,
    text: '',
    status: 'hidden'
  }

  handleState = async (res) => {
    if (await parseInt(res) == 2) {
      this.setState({ 
        text: 'ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11',
        visible: 'visible'
      })
    }
    else {
      this.setState({
        text: 'ขอแสดงความเสียใจน้องไม่ผ่านการคัดเลือกเข้าค่าย WIP Camp #11 ครับ ไว้กลับมาสมัครใหม่อีกครั้งในปีหน้านะครับ',
        visible: 'hidden'
      })
    }
    this.setState({
      display: 'none',
      filter: 0,
      click: true
    })
  }

  handleClick = () => {
    this.setState({
      click: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Minisize />
        <Div>
          <Button display={this.state.display} handleState={this.handleState} />
          <Blur filter={this.state.filter}>
            <Background />
            <Treatise click={this.state.click} handleClick={this.handleClick} text={this.state.text} visible={this.state.visible} />
          </Blur>
        </Div>
      </React.Fragment>
    )
  }
}
