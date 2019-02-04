import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'
import ContactBox from './ContactBox'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from './background';

const PDBox1 = styled(PDBox)`
  background-color : unset;
`
const MiddleOfTheRight = styled.div`
  @media (min-width:992px){
    transform: translate(0, 25%);
  }
`
const LogoInfo = [
  { imgUrl: 'ig.png', link: 'https://www.instagram.com/wipcamp/' },
  { imgUrl: 'Twitter.png', link: 'https://twitter.com/WIPCamp' },
  { imgUrl: 'youtube.png', link: 'https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA' },
  { imgUrl: 'lineAdd.png', link: 'http://line.naver.jp/ti/p/Z_Qg6KlFnU#~' }
]

const BoxInfo = [
  { className: 'p-0 mt-4 mb-3 col-6 col-lg-12 ', href: 'tel://02-107-3576', imgUrl: 'phone-call.png', text: '02-107-3576' },
  { className: 'p-0 ml-lg-4 mt-4 mt-lg-2 mb-3 col-6 col-lg-12', href: 'mailto:wippo@wipcamp.com', imgUrl: 'email.png', text: 'wippo@wipcamp.com' }
]

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo wippo='wippoContact.png' />
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
                    <div className="row mr-1 ml-1">
                      {
                        LogoInfo.map((data, i) => (
                          <div className="col-3 col-lg-3" key = {i}>
                            <Logo imgUrl={data.imgUrl} link={data.link} />
                          </div>
                        ))
                      }
                    </div>
                    <div className="row">
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
      </Bg>
    )
  }
}
