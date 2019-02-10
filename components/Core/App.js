import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Element } from 'react-scroll'
import ReactPageScroller from "react-page-scroller"
import {Pager} from "react-bootstrap"

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import FAQs from '../FAQs'
import Contact from '../Contact'
import Loading from './Loading'
import RegisterButton from './Register'
import Game from '../Game'
import Sponsor from '../Sponsor'
import MiniSize from './Minisize'

import {Font} from './Texts'
import SideBar from './SideBar'

// const datenow = dayjs('2019-03-30')
const datenow = dayjs().format()
const dateStartResgis = dayjs('2019-02-11')  
const dateEndRegis = dayjs('2019-03-11')  
const dateStartAnnounced = dayjs('2019-03-29') 
const dateStartCamp = dayjs('2019-05-29') 

const Section = styled(Element)`
  
`
const BGcolor = styled.div`
overflow-x:hidden;
overflow-y:hidden;
background : #F8E9D6;

`

const RegisVisible = styled.div`
  visibility: ${porps => porps.visi || "visible"};
`
const ReText = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);


  @media (min-width:320px) {
    font-size: 0.8em;
  }
  @media (min-width:768px) {
    font-size: 0.85em;
  }
  @media (min-width:1024px) {
    font-size: 1em;
  }

`
const RegisButton = (props) =>(
  <RegisVisible visi={props.visi}>
    <a href={props.a} target="_blank">
    <RegisterButton>
      <ReText>{props.text}</ReText>
    </RegisterButton>
    </a>
  </RegisVisible>
)

const MSize = styled.div`
  @media(orientation:landscape)
  and (max-width:850px){
    display:none;
  }
  @media(orientation:portrait)
  and (min-width:768px) and (max-width:1024px){
    display:none;
  }
`

class App extends React.Component {
  state = {
    loading: false, //true
    count:0,
    text:["รอก่อนนะ","รับสมัคร" ,"ประกาศผล"],
    textcount:0,
    a: ['http://itim.wip.camp','http://itim.wip.camp'],
    acount:0,
    visible: ["hidden", "visible"],
    visiblecount:1,
  };
  async componentWillMount() {
    console.log("%c We Are 11 Developer. ",'background:pink; color:#000; display:block; font-size:3em; font-family:Sarabun;')
    console.log('If you interest our code :) Join WIP Camp #11.')
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ loading: false }), 1500);
    
    if (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow)) {
      this.setState({
        textcount: 1,
        visiblecount: 1,
        acount : 0
      })
    } else if (dateStartAnnounced.isBefore(datenow) && dateStartCamp.isAfter(datenow)) {
      this.setState({
        textcount: 2,
        visiblecount: 1,
        acount : 1
      })
    } else {
      this.setState({
        textcount: 0,
        visiblecount: 0
      })
    }
  }

  render() {
    const { loading } = this.state;
    
    if (loading) {
      return (
        <Loading />
        )
      }

    return (
      <div>
        <MiniSize />
        <MSize>
          <BGcolor>
            <RegisButton visi={this.state.visible[this.state.visiblecount]} text={this.state.text[this.state.textcount]} a={this.state.a[this.state.acount]} ></RegisButton>
            <SideBar />
          </BGcolor>
        </MSize>
      </div>
    )
  }
}

export default App


/*


<ReactPageScroller>
          {this.state.count === 0 &&
            <Section name = "home">
              <Home />
            </Section>
          }
          <Section name = "what">
            <What />
          </Section>
          <Section name="who">
            <Who />
          </Section>
          <Section name="where" >
            <Where />
          </Section>
          <Section name="when" >
            <When />
          </Section>
          <Section name="faqs" >
            <FAQs />
          </Section>
          <Section name="sponsor">
            <Sponsor/>
          </Section>
          <Section name="contact" >
            <Contact />
          </Section>
          <Section name = "game">
            <Game />
          </Section>
        </ReactPageScroller>
        */