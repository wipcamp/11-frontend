import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'
import ContactBox from './ContactBox'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from './background'

const Bg1 = styled(Bg)`
  height: 100%;
`

const Model = styled(Wippo)`
  z-index: 20;
  @media (min-width:320px){
    z-index: 0;
  }
  @media (min-width:768px){
    z-index: 0;
  }
  @media (min-width:1000px){
    z-index: 20;
  }
 
`
const Div = styled.div`
  text-align: center !important;
  width:auto;
  @media (min-width:320px){
    position:relative;
    left : 10vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
  @media (min-width:576px){
    left : 10vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
  @media (min-width:630px){
    left : 9vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
  @media (min-width:750px){
    left : 7vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
  @media (min-width:850px){
    left : 9vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
  @media (min-width:992px){
    position:relative;
    left : 5vw;
    margin-left:0;
    margin-right:auto;
    text-align: center !important;
  }
`
const Div1 = styled.div`
  margin-bottom:0.5rem;
  margin-left:0;
  margin-right:0;
  @media (min-width:977px){
    margin-left:3em;
  }
  @media (min-width:992px){
    margin-left:-2em;
  }
  @media (min-width:1024px){
    margin-left:2em;
  }
  @media (min-width:1100px){
    margin-left:2.25em;
  }
  @media (min-width:1150px){
    margin-left:2.3em;
  }
  @media (min-width:1200px){
    margin-left:-1em;
  }
  @media (min-width:1300px){
    margin-left:0em;
  }
  @media (min-width:1500px){
    margin-left:1em;
  }
  @media (min-width:1700px){
    margin-left:2em;
  }
  @media (min-width:1800px){
    margin-left:2.5em;
  }
  @media (min-width:1900px){
    margin-left:3em;
  }
  @media (min-width:2000px){
    margin-left:3.75em;
  }
  @media (min-width:2300px){
    left:4vw;
  }
`
const Div2 = styled.div`
  @media (min-width:1024px){
    margin-left:0.75rem;
  }
  @media (min-width:1200px){
    margin-left:0rem;
  }
`

const MiddleOfTheRight = styled.div`
  @media (min-width:576px){
    left:0vw;
  }
  @media (min-width:685px){
    left:-1vw;
  }
  @media (min-width:970px){
    left:-2.5vw;
  }
  @media (min-width:992px){
    left:-0.5vw;
    transform: translate(0, 15%);
  }
`
const LogoInfo = [
  { imgUrl: '../../static/img/social/ig.png', link: 'https://www.instagram.com/wipcamp/' },
  // { imgUrl: '../../static/img/social/Twitter.png', link: 'https://twitter.com/WIPCamp' },
  { imgUrl: '../../static/img/social/youtube.png', link: 'https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA' },
  { imgUrl: '../../static/img/social/lineAdd.png', link: 'https://line.me/R/ti/p/%40wipcamp' }
]

const BoxInfo = [
  { className: 'p-0 mb-lg-3 col-12 col-lg-12 ', href: 'tel://0955812358', imgUrl: '../../static/img/social/phone-call.png', text: '095-581-2358 (พี่ทีเจ)' },
  { className: 'p-0 mt-3 mb-lg-4 col-12 col-lg-12', href: 'mailto:wippo@wipcamp.com', imgUrl: '../../static/img/social/email.png', text: 'wippo@wipcamp.com' }
]

export default class index extends Component {
  render () {
    return (
      <Bg1>
        <Model src='../../static/img/wippo/wippoContact.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 ">
              <div className="row justify-content-center text-center">
                <h1><Headline>Contact</Headline></h1>
              </div>
              <PDBox>
                <div className="col-12">
                  <div className="p-0 text-center">
                    <Subtitle>ติดต่อเรา</Subtitle>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-lg-6 mb-3">
                    <Fbfeed/>
                  </div>
                  <MiddleOfTheRight className="col-12 col-sm-12 col-lg-6 text-center">
                    <Div className="row">
                      {
                        LogoInfo.map((data, i) => (
                          <Div2 className="pl-0 pr-0 col-3 col-lg-3" key = {i}>
                            <Logo imgUrl={data.imgUrl} link={data.link} />
                          </Div2>
                        ))
                      }
                    </Div>
                    <br />
                    <Div1 className="row">
                      {
                        BoxInfo.map((data, i) => (
                          <div key={i} className={data.className}>
                            <ContactBox href={data.href} imgUrl={data.imgUrl} text = {data.text} />
                          </div>
                        ))
                      }
                    </Div1>
                  </MiddleOfTheRight>
                </div>
              </PDBox>
            </div>
          </div>
        </div>
      </Bg1>
    )
  }
}
