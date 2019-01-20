import React from 'react'
import styled from 'styled-components'

import { Link, Events, scrollSpy, scroller } from 'react-scroll'
import Button from './Button';

const NavSection = styled.nav`
  position: fixed;
  transition: all .2s;
  right: 50px;
  margin: 0 !important;
  top: 50%;
  transform: translateY(-50%);
  z-index:99;
  display: ${(props) => props.display ? "" : "none"};
  /* transition : display 1s  !important; */
  
  @media(max-width: 768px) {
   display: none;
  }

  &:after {
    clear: both;
    text-decoration: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: black;
  margin: 20px 0;
  opacity: 0.6;
  transition: all .2s;
  cursor : pointer;

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
    opacity: 0;
    display: flex;
    position: absolute;
    right: 2.2em;
    width: 100px;
    justify-content: flex-end;
    font-size: 14px;
    top:10%;
  }

  &:hover {
    opacity: 1;
    &:before {
      border: 1px solid white;
    }
    .text {
      opacity: 1;
      color: black;
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
      right: -5px;
      justify-content: flex-end;
      font-size: 14px;
      font-weight:bold;
    }
  }
`
const SectionUl = styled.ul`
  margin: 0;
`

const NavItems = styled.li`
  transition: all .15s ease;
  opacity: 1;
  display: block;
  margin-bottom: 10px;
  position: relative;
  text-align: right;
`

const AnimationNavbar = styled.div`
  animation-name: ${(props) => props.display ? "fadeOutight" : "fadeInRight"};
  animation-duration:.5s;
  @keyframes fadeInRight {
    from {
      /* display:none; */
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      /* display:block; */
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    from {
      /* display:block; */
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    to {
      /* display:none; */
      opacity: 0;
      transform: translate3d(150%, 0, 0);
    }
  }
`
  

const sections = [
  { href: 'home', title: 'Home' },
  { href: 'what', title: 'What' },
  { href: 'who', title: 'Who' },
  { href: 'where', title: 'Where' },
  { href: 'when', title: 'When' },
  { href: 'faqs', title: 'FAQs' },
  { href: 'sponsor', title: 'Sponsors' },
  { href: 'contact', title: 'Contact' }
]

class Navbar extends React.Component {
  state = {
      current: 'home',
      show: false,
      display: false,
      animation: 'fadeInRight'
  }
  toggleNavbar (to) {
    if (to === 'home') {
      this.setState({ show: false })
      this.setState({ display: false })
      this.setState({ animation: 'fadeOutRight'})
    } else {
      this.setState({ animationcount: 'fadeInRight'})
      this.setState({ show: true })
      this.setState({ display: true})
    }
    this.setState({
      current: to
    })
  }

  render () {
    return (
      <NavSection active={this.state.show} display={this.state.display} >
        <AnimationNavbar>
        <SectionUl >
          {
            sections.map(i => (
              <NavItems key={i.href}>
                <NavLink
                  display={this.state.display}
                  activeClass="active"
                  to={i.href}
                  spy
                  smooth
                  duration={500}
                  offset={0}
                  onSetActive={to => this.toggleNavbar(to)}
                >
                  <div className="text">
                    {i.title}
                  </div>
                </NavLink>
              </NavItems>
            ))
          }
        </SectionUl>
        <Button name = "Game"/>
        </AnimationNavbar>
      </NavSection>
    )
  }
}

export default Navbar
