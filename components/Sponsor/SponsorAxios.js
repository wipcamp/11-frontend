import React, { Component } from 'react'
import axios from 'axios'

export default class SponsorAxios extends Component {
  state = {
    person: [],
  }
  
  componentDidMount () {
    axios.get('https://sponsor.service.freezer.in.th/api/sponsors?fbclid=IwAR1t3LEA5T2QqoMlNutgKQR9cqGHkQzHWpHiidOH8kPFLAjTpbH2l5_jRo0')
      .then((response) => {
        this.successShow(response);
        this.getPicture(response);
      })
      .catch((error) => {
        this.successShow(error)
      })
  }

  successShow (response) {
    for (let i = 0 ; i <= 4 ; i++){
      this.state.person.push(response.data[i].sponsor_path);
    }
  }

  getPicture(response){
    const pictures = [];

    for(let i = 0 ; i <= 4 ; i++){
      pictures.push(
        this.state.person[i]
      )
    }
    return [...pictures];
  }
  render () {
    const pictures = this.getPicture();
    return (
      <div>
        <img src = {JSON.stringify(this.state.person[0])} />
        <img src = {pictures[0]} />
        <img src = {pictures[1]} />
        <img src = {pictures[2]} />
        <img src = {pictures[3]} />
        <img src = {pictures[4]} />
      </div>
    )
  }
}

// {"data":{"id":3,"name":"true red","year":2002,"color":"#BF1932","pantone_value":"19-1664"}}

/*


        <h3>{JSON.stringify(this.state.person)}</h3>

        <pre>{JSON.stringify(this.state.person)}</pre>

[{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/bangmode.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T110932Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=999113df84783dbd9330725139db2de87508a438f6f9c7d27ac76325168f80cd"},
{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/yipinsoi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T111008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6edcd8e65e470972c516c347d7df6a440b3099b96ace8fe371fd87f4ceddfc91"},
{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/camphub.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T111102Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1fd34afe8c56c9eca5dce121b7e572863207d4d0b374b89e59d0ec414005c642"},
{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/gable.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T111020Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b19863c0163c1cf92597c17a53a4632afc52ae7fade58547ac57c0cd853a523f"},
{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/bowbakery.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T111046Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9de8ef7f0e237d94bda7c7f5b70e07d97ae9dbd02e50ca4b1ca7db599e40c02c"},{"sponsor_path":"https:\/\/storage.freezer.in.th\/sponsor\/dcs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190206%2F%2Fs3%2Faws4_request&X-Amz-Date=20190206T111217Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cfa4d9e91a2c479689d5d46cb719b2fdb2a5108300c47e5ea82383b92ffe0cfb"}]

*/
