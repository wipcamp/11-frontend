import React, { Component } from 'react'
import service from './serviec'
class score extends Component {
  state = {
    team: [
      { id:1,name: 'ซาบะ', score: 1 },
      { id:2,name: 'แซลม่อน', score: 10000 },
      { id:3,name: 'ไดฟูกุ', score: 220 },
      { id:4,name: 'โมจิ', score: 333330 },
      { id:5,name: 'วาซาบิ', score: 2 },
      { id:6,name: 'โชยุ', score: 10 },
      { id:7,name: 'พุดดิ้ง', score: 99 },
      { id:8,name: 'มันม่วง', score: 40 },
      { id:9,name: 'ซากุระ', score: 100 },
      { id:10,name: 'มัจฉะ', score: 44 }
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
                <h1>รส{data.name}</h1>
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
