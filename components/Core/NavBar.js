import React from 'react'
import styled from 'styled-components'
import { Link, Events, scrollSpy, scroller } from 'react-scroll'
import Button from './Button';

const NavSection = styled.nav`
  position: fixed;
  transition: all .2s;
  right: 40px;
  margin: 0 !important;
  top: 50%;
  transform: translateY(-50%);
  z-index:99;
  display: ${(props) => props.display ? "" : "none"};

  ul li:first-child {
    display: none;
  }
  
  @media(max-width: 768px) {
   display: none;
  }

  &:after {
    clear: both;
    text-decoration: none
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
    height: 10px;
    width: 10px;
    display: flex;
    border: 1px solid black;
    border-radius: 50%;
    margin: 5px;
    background-color: black;
  }
  
  .text {
    opacity: 0;
    display: flex;
    position: absolute;
    right: 2.2em;
    width: 100px;
    justify-content: flex-end;
    font-size: 14px;
  }

  &:hover {
    opacity: 1;
    &:before {
      border: 1px solid black;
    }

    .text {
      opacity: 1;
      color: black;
    }
  }

  &.active {
    opacity: 1;
    &:before {
      border: 1px solid black;
      background-color: white;
    }

    .text {
      opacity: 1;
      color: black;
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

const sections = [
  { href: '', title: '' },
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
  }
  toggleNavbar (to) {
    if (to === 'home') {
      this.setState({ show: false })
      this.setState({ display: false })
    } else {
      this.setState({ show: true })
      this.setState({ display: true})
    }
    this.setState({
      current: to
    })
  }

  render () {
    return (
      <NavSection active={this.state.show} display = {this.state.display}>
        <SectionUl>
          {
            sections.map(i => (
              <NavItems key={i.href}>
                <NavLink
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
      </NavSection>
    )
  }
}

export default Navbar
