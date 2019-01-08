import React, { Component } from 'react'
import Box from './Textbox'
import styled from 'styled-components'

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : left;
    padding : 2em 5em;
`


export default class componentName extends Component {
  render() {
    return (


      <Box>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           <BoxStyle>

          <div className="row">
            <div className="col-4">
              <img src="static/img/icon-who/computer.png" alt="computer" height="100" width="100" />
              <div className="my-5">
                <img src="static/img/icon-who/graduate.png" alt="การศึกษา" height="100" width="100" />
                <div className="my-5">
                  <img src="static/img/icon-who/person.png" alt="เหมาะสำหรับ" height="100" width="100" />
                  <div className="my-5">
                    <img src="static/img/icon-who/moon.png" alt="ระยะเวลา" height="100" width="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </BoxStyle>
      </Box>

    )
  }
}
