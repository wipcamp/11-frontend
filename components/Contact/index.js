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

const LogoInfo = [
  { imgUrl: '../../static/img/social/ig.png', link: 'https://www.instagram.com/wipcamp/' },
  // { imgUrl: '../../static/img/social/Twitter.png', link: 'https://twitter.com/WIPCamp' },
  { imgUrl: '../../static/img/social/youtube.png', link: 'https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA' },
  { imgUrl: '../../static/img/social/lineAdd.png', link: 'https://line.me/R/ti/p/%40wipcamp' }
]

const BoxInfo = [
  { className: 'p-0 mb-lg-3 col-12 col-lg-12 ', href: 'tel://0955812358', imgUrl: '../../static/img/social/phone-call.png', text: '095-581-2358 (พี่ทีเจ)' },
  { className: 'p-0 mt-2 mb-1 mb-lg-4 col-12 col-lg-12', href: 'mailto:wippo@wipcamp.com', imgUrl: '../../static/img/social/email.png', text: 'wippo@wipcamp.com' }
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
                <div className="row d-flex flex-row justify-content-center">
                  <div className="col-12 col-sm-12 col-lg-6 mb-3 justify-content-start ">
                    <Fbfeed/>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-6 text-center  mt-lg-5 mt-xl-3">
                    <div className="col-12 d-flex justify-content-center mt-xl-5">
                      <div className="row">
                        {
                          LogoInfo.map((data, i) => (
                            <div className="pl-1 pr-1 col-4 col-lg-4" key = {i}>
                              <Logo imgUrl={data.imgUrl} link={data.link} />
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mt-lg-4 ">
                      <div className="row">
                        {
                          BoxInfo.map((data, i) => (
                            <div key={i} className={data.className}>
                              <ContactBox href={data.href} imgUrl={data.imgUrl} text = {data.text} />
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </PDBox>
            </div>
          </div>
        </div>
      </Bg1>
    )
  }
}
