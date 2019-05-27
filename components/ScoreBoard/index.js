import React, { Component } from 'react'
import service from './serviec'
class score extends Component {
  state = {
    team: [
      { name: 'ซาบะ', score: 0 },
      { name: 'แซลม่อน', score: 0 },
      { name: 'ไดฟูกุ', score: 0 },
      { name: 'โมจิ', score: 0 },
      { name: 'วาซาบิ', score: 0 },
      { name: 'โชยุ', score: 0 },
      { name: 'พุดดิ้ง', score: 0 },
      { name: 'มันม่วง', score: 0 },
      { name: 'ซากุระ', score: 0 },
      { name: 'มัจฉะ', score: 0 }
    ],
  }
  
  handleScore = () => {
    console.log('test')
    this.state.team.sort((a,b) => b.score-a.score)
  }
  getScore = async()=>{
    let res = await service.getScore()
    res=res.data
    console.log(res)
    res.map((data,i)=>{

    })
  }
  render() {
    this.getScore()
    return (
      <div className="container justify-content-center">
      {this.handleScore()}
        {this.state.team.map((data, i) => {
          return (
            <div key={i} className="row my-3">
              <div className="col-10">
                <h1>{data.name}</h1>
              </div>
              <div className="col-2">
                <h1>{data.score}</h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default score
