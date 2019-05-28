import React, { Component } from 'react'
import service from './serviec'
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'Times New Roman', Times, serif;
  background: #f8e9d6;
  background-image: url('static/img/MaskGroup.png');
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100vw;
`
const Head = styled.h1`
  font-family: 'Times New Roman', Times, serif;
`

const Name = styled.h2`
  font-family: 'Times New Roman', Times, serif;
`
const Box = styled.div`
  background: ${props => props.color};
  color: ${props => props.font};
  border: 2px solid transparent;
  border-radius: 1em;
`

class score extends Component {
  state = {
    team: [
      { id: 1, name: 'ซาบะ', score: 0 },
      { id: 2, name: 'แซลม่อน', score: 0 },
      { id: 3, name: 'ไดฟูกุ', score: 0 },
      { id: 4, name: 'โมจิ', score: 0 },
      { id: 5, name: 'วาซาบิ', score: 0 },
      { id: 6, name: 'โชยุ', score: 0 },
      { id: 7, name: 'พุดดิ้ง', score: 0 },
      { id: 8, name: 'มันม่วง', score: 0 },
      { id: 9, name: 'ซากุระ', score: 0 },
      { id: 10, name: 'มัจฉะ', score: 0 }
    ],
    tmp: [],
    color: ''
  }

  handleColor = num => {
    switch (num) {
      case 1:
        return '#707070'
      case 2:
        return '#fa8d65'
      case 3:
        return '#aa2335'
      case 4:
        return '#c2e7f2'
      case 5:
        return '#eaeda9'
      case 6:
        return '#d3a688'
      case 7:
        return '#fbc342'
      case 8:
        return '#efd3e5'
      case 9:
        return '#f5989f'
      case 10:
        return '#86884a'
    }
  }
  handleFont = num => {
    switch (num) {
      case 1:
      case 3:
      case 10:
        return '#fff'
      default:
        return '#000'
    }
  }

  handleScore = () => {
    console.log('test')
    this.state.tmp.sort((a, b) => b.total_score - a.total_score)
  }
  getScore = async () => {
    let res = await service.getScore()
    res = res.data
    console.log(res)
    res.map((data, i) => {
      this.setState({
        tmp: res
      })
    })
  }
  componentDidMount() {
    setTimeout(() => {
      window.location.reload()
    }, 180000)
    this.getScore()
  }
  render() {
    return (
      <Body>
        <div className="container justify-content-center p-5">
          {this.handleScore()}

          <Head className="text-center">WIP Camp #11 Score Board</Head>

          {this.state.tmp.map((data, i) => {
            return (
              <Box
                key={i}
                className="row my-4 p-2"
                color={this.handleColor(data.flavor_id)}
                font={this.handleFont(data.flavor_id)}
              >
                <div className="col-10">
                  <Name>รส{data.name}</Name>
                </div>
                <div className="col-2">
                  <Name>{data.total_score}</Name>
                </div>
              </Box>
            )
          })}
        </div>
      </Body>
    )
  }
}

export default score
