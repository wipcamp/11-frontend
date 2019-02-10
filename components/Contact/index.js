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
    z-index: 20;
  }
`

const PDBox1 = styled(PDBox)`
  @media (min-width:320px){
    margin-bottom:10em;
  }
`
const MiddleOfTheRight = styled.div`
  @media (min-width:992px){
    transform: translate(0, 15%);
  }
`
const LogoInfo = [
  { imgUrl: '../../static/img/social/ig.png', link: 'https://www.instagram.com/wipcamp/' },
  // { imgUrl: '../../static/img/social/Twitter.png', link: 'https://twitter.com/WIPCamp' },
  { imgUrl: '../../static/img/social/youtube.png', link: 'https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA' },
  { imgUrl: '../../static/img/social/lineAdd.png', link: 'http://line.naver.jp/ti/p/Z_Qg6KlFnU#~' }
]

const BoxInfo = [
  { className: 'p-0 mt-3 mb-sm-1 mb-lg-3 col-6 col-lg-12 ', href: 'tel://0965812358', imgUrl: '../../static/img/social/phone-call.png', text: '095-581-2358 (พี่ทีเจ)' },
  { className: 'p-0 mt-3 mb-sm-1 mb-lg-4 col-6 col-lg-12', href: 'mailto:wippo@wipcamp.com', imgUrl: '../../static/img/social/email.png', text: 'wippo@wipcamp.com' }
]

export default class index extends Component {
  render () {
    return (
      <Bg1>
        <Model src='../../static/img/wippo/wippoContact.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row justify-content-center">
                <h1><Headline>Contact</Headline></h1>
              </div>
              <PDBox1>
                <div className="text-center">
                  <Subtitle>ติดต่อเรา</Subtitle>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-lg-6 mb-3">
                    <Fbfeed/>
                  </div>
                  <MiddleOfTheRight className="col-12 col-sm-12 col-lg-6 text-center">
                    <div className="row mr-auto ml-5 pl-4 mt-2">
                      {
                        LogoInfo.map((data, i) => (
                          <div className="pl-0 pr-0 col-3 col-lg-3" key = {i}>
                            <Logo imgUrl={data.imgUrl} link={data.link} />
                          </div>
                        ))
                      }
                    </div>
                    <div className="row ml-0 mr-0">
                      {
                        BoxInfo.map((data, i) => (
                          <div key={i} className={data.className}>
                            <ContactBox href={data.href} imgUrl={data.imgUrl} text = {data.text} />
                          </div>
                        ))
                      }
                    </div>
                  </MiddleOfTheRight>
                </div>
              </PDBox1>
            </div>
          </div>
        </div>
      </Bg1>
    )
  }
}
