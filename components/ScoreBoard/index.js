import React, { Component } from 'react'

class score extends Component {
  state = {
    team: [
      { name: 'ซาบะ', score: 1 },
      { name: 'แซลม่อน', score: 10000 },
      { name: 'ไดฟูกุ', score: 220 },
      { name: 'โมจิ', score: 333330 },
      { name: 'วาซาบิ', score: 2 },
      { name: 'โชยุ', score: 10 },
      { name: 'พุดดิ้ง', score: 99 },
      { name: 'มันม่วง', score: 40 },
      { name: 'ซากุระ', score: 100 },
      { name: 'มัจฉะ', score: 44 }
    ],
  }

  handleScore = () => {
    console.log('test')
    this.state.team.sort((a,b) => b.score-a.score)
  }
  render() {
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
