import React from "react";
import {Pager} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import styled from 'styled-components'
import { Link, Events, scrollSpy, scroller } from 'react-scroll'

import Home from '../Home'
import What from '../What'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import FAQs from '../FAQs'
import Contact from '../Contact'
import Game from '../Game'
import Sponsor from '../Sponsor'
import Button from './Button'
import { throws } from "assert";

const NavSection = styled.nav`
  position: fixed;
  transition: all .2s;
  right: 2rem;
  margin: 0 !important;
  top: 20%;
  transform: translateY(-50%);
  z-index:1000;
  visibility:${(props) => props.show ? "visible" : "hidden"} ;
  
  @media(max-width: 768px) {
   display: none;
  }
  @media(max-width: 878px) {
    right: 0.5rem;
  }
  @media(max-width: 1024px) {
    right: 0.5rem;
  }

  &:after {
    clear: both;
    text-decoration: none;
  }
`
const BG = styled.div`
  background-image : url('static/img/paper.png') ;
  background-size: cover;
  min-width:95px;
  justify-content: center;
  padding:1.5em 0;
`

const NavLink = styled.div`
  display: flex;
  color: black;
  margin: 20px 0;
  opacity: 0.6;
  transition: all .1s;
  cursor : pointer;
  text-align: center;
  justify-content: center;

  &:before {
    content: '';
    height: 20px;
    width: 7.5px;
    display: flex;
    border: 1px solid #C63939;
    margin: 5px;
    background-color: #C63939;
  }

  .text {
    opacity: 1;
    display: flex;
    position: absolute;
    justify-content: flex-end;
    font-size: 14px;
    top:10%;
  }

  &:hover {
    opacity: 1;
    &:before {
      border: 1px solid white;
      background-color: transparent;
      border: none;
      transition: 0.5s;
    }
    &:after {
      transition: 0.5s;
    }
    .text {
      transition: 0.5s;
      opacity: 1 ;
      color: blue;
    }
  }

  &.active {
    opacity: 1;
    &:before {
      opacity:0;
    }
    .text {
      opacity: 1;
      display: flex;
      position: absolute;
      justify-content: flex-end;
      font-size: 14px;
      font-weight:bold;
    }
  }
`

const NavText = styled.div`
  opacity: 0;
  display: flex;
  position: absolute;
  justify-content: flex-end;
  font-size: 14px;
  top:10%;
  height: 30px;

  &:hover{
    opacity: 1;
    display: flex;
    position: absolute;
    justify-content: flex-end;
    font-size: 14px;
    font-weight:bold;
  }

  &.active {
    opacity: 1;
    display: flex;
    position: absolute;
    justify-content: flex-end;
    font-size: 14px;
    font-weight:bold;
  }
`
const SectionUl = styled(Pager)`
  margin: 0;
  padding: 0;
`

const NavItems = styled(Pager.Item)`
  transition: all .3s ease;
  opacity: 1;
  display: block;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
`
const AnimationNavbar = styled(NavSection)`
  animation-name: ${(props) => props.show ? "fadeInRight" : "fadeOutRight"  };
  animation-duration:.5s;
  animation-fill-mode: forwards;
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    from {      
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    to {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
  }
`
const Desktop = styled.div`
  @media(min-width:320px) {
    display:none;
  }
  @media (min-width:410px) {
    display:none;
  }
  @media (min-width:576px) {
    display:none;
  }
  @media (min-width:768px) {
    display:block;
  }
  @media(min-width:1024px) {
    display:block;
  }
`
const Moblie = styled.div`
  @media(min-width:320px) {
    display:block;
  }
  @media (min-width:410px) {
    display:block;
  }
  @media (min-width:576px) {
    display:block;
  }
  @media (min-width:768px) {
    display:none;
  }
  @media(min-width:1024px) {
    display:none;
  }
`
export default class SideBar extends React.Component {
   state = {
      current: 'home',
      show: false,
      display: "active",
      currentPage:1,
      _pageScroller : null,
      show : false
  }

    goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
      if(number == 1){
        this.setState({
          show: false
        })
      }
      else{
        this.setState({
          show: true
        })
      }
      this.setState({currentPage: number});
    };

    handleClickText = () => {
      this.setState({
        display: "active"
      })
      if(this.state.currentPage == 0){
        this.state.show = false
      }
    };

    setActive = (i) => {
      if(this.state.currentPage == i){
        return this.state.display
      }
      else{
        return null
      }
    }

    render() {
      const sections = [ ,'Home' , 'What' ,'Who' , 'Where' ,'When', 'FAQs', 'Contact']

      return <React.Fragment>
            <Desktop>
            <ReactPageScroller 
            ref={c => this._pageScroller = c} 
            pageOnChange={this.pageOnChange}
            >
                <Home/>
                <What/>
                <Who/>
                <Where/>
                <When/>
                <FAQs/>
                {/* <Sponsor/> */}
                <Contact/>
                <Game/>
            </ReactPageScroller>
            </Desktop>
            <Moblie>
                <Home/>
                <What/>
                <Who/>
                <Where/>
                <When/>
                <FAQs/>
                {/* <Sponsor/> */}
                <Contact/>
                <Game/>
            </Moblie>

            <AnimationNavbar show={this.state.show} >
              <BG>   
                <SectionUl>
                {
                  sections.map((info, i) => (
                    <NavItems key={i} eventKey={i-1} onSelect={this.goToPage} onClick={()=>this.handleClickText()}>
                      <NavLink className = {this.setActive(i)}>
                        <NavText className = {this.setActive(i)}>{sections[i]}</NavText>
                      </NavLink>
                    </NavItems>
                  ))
                }
                </SectionUl>
                <div className = "text-center">
                  <NavItems key={9} eventKey={7} onSelect={this.goToPage}> 
                    <Button src = '/static/img/console.png'  className = "text-center pb-2"/>
                  </NavItems>
                </div> 
             </BG>
          </AnimationNavbar>
          
         </React.Fragment>
    }
}