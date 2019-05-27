import React, { Component } from 'react'
import service from './serviec'
import { min } from 'moment';
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
    }, 180000);
    this.getScore()
    
  }
  render() {

    return (
      <div className="container justify-content-center">
        {
          this.handleScore()
        }
        {this.state.tmp.map((data, i) => {
          return (
            <div key={i} className="row my-3">
              <div className="col-10">
                <h1>รส{data.flavor_id}</h1>
              </div>
              <div className="col-2">
                <h1>{data.total_score}</h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default score
