import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Element } from 'react-scroll'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import FAQs from '../FAQs'
import Contact from '../Contact'
import Loading from './Loading';
import RegisterButton from './Register';
import Game from '../Game'

const datenow = dayjs().format()
const date0 = dayjs('2019-02-12')
const dateStartResgis = dayjs('2019-01-07')
const dateEndRegis = dayjs('2019-01-13')
const dateStartAnnounced = dayjs('2019-01-14')
const dateStartCamp = dayjs('2019-02-20')

const Section = styled(Element)`
  padding: 80px 0px;

  @media(max-width: 768px) {
    padding: 50px 0;
  }
`

class App extends React.Component {
  state = {
    loading: false, //true
    count:0,
    text:["รอก่อนนะ","รับสมัคร" ,"ประกาศผล"],
    textcount:0
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

  }
  
  
  render() {
    const { loading } = this.state;
    
    if (loading) {
      return (
        <Loading />
        )
      }
    
    if (dateStartResgis.isBefore(date0)&&dateEndRegis.isAfter(date0)){
      this.state.textcount = 1;
    }else if (dateStartAnnounced.isBefore(date0) && dateStartCamp.isAfter(date0)) {
      this.state.textcount = 2;
    }else{
      this.state.textcount = 0;
    }

    return (
      <div>
        <RegisterButton>{this.state.text[this.state.textcount]}</RegisterButton>
        <Navbar />
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
        <Section name="contact" >
          <Contact />
        </Section>
        <Section name = "game">
          <Game />
        </Section>
      </div>
    )
  }
}

export default App