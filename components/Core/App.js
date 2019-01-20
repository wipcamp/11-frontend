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

// const dateTest = dayjs('2019-01-08')
const datenow = dayjs().format()
const dateStartResgis = dayjs('2019-01-07')  //Before start register one day
const dateEndRegis = dayjs('2019-01-13')  //After end register one day
const dateStartAnnounced = dayjs('2019-01-14')  //Before announced one day
const dateStartCamp = dayjs('2019-02-20') //Before start camp one day

const Section = styled(Element)`
  padding: 0px;

  @media(max-width: 768px) {
    padding: 50px 0;
  }
`
const BGcolor = styled.div`
overflow-x:hidden;
background : #F8E9D6;

`

const RegisVisible = styled.div`
  visibility: ${porps => porps.visi || "visible"};
`

const RegisButton = (props) =>(
  <RegisVisible visi={props.visi}>
    <RegisterButton>{props.text}</RegisterButton>
  </RegisVisible>
)

class App extends React.Component {
  state = {
    loading: false, //true
    count:0,
    text:["รอก่อนนะ","รับสมัคร" ,"ประกาศผล"],
    textcount:0,
    visible: ["hidden", "visible"],
    visiblecount:1
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
    
    if (dateStartResgis.isBefore(datenow)&&dateEndRegis.isAfter(datenow)){
      this.state.textcount = 1;
      this.state.visiblecount = 1;
    }else if (dateStartAnnounced.isBefore(datenow) && dateStartCamp.isAfter(datenow)) {
      this.state.textcount = 2;
      this.state.visiblecount = 1;
    }else{
      this.state.textcount = 0;
      this.state.visiblecount = 0;
    }

    return (
      <BGcolor>
        <RegisButton visi={this.state.visible[this.state.visiblecount]} text={this.state.text[this.state.textcount]} />
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
      </BGcolor>
    )
  }
}

export default App