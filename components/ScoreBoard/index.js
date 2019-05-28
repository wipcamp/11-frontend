import React, { Component } from 'react'
import service from './serviec'
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'Times New Roman', Times, serif;
  background: #f8e9d6;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const Name = styled.h1`
  font-family: 'Times New Roman', Times, serif;
`
const Box = styled.div`
  background: rgba(0,0,0,.65);
  color: #fff;
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
    tmp: []
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
        <div className="container justify-content-cente p-5">
          {this.handleScore()}
          {this.state.tmp.map((data, i) => {
            return (
              <Box key={i} className="row mb-3">
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
