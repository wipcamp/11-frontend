import React from 'react';
import styled from 'styled-components';
import { Link, Events, scrollSpy, scroller } from 'react-scroll';


const NavSection = styled.nav`
    position: fixed;
    top: 50%;
    transition: all .2s;
    right: 40px;
    margin: 0 !important;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;

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
`;

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
    }

    .text {
      opacity: 1;
      color: black;
    }
  }
`;
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
  { href: 'home', title: 'Home'},
  { href: 'what', title: 'What' },
  { href: 'who', title: 'Who' },
  { href: 'where', title: 'Where' },
  { href: 'when', title: 'When' },
  { href: 'faqs', title: 'FAQs' },
  { href: 'sponsor', title: 'Sponsors' },
  { href: 'contact', title: 'Contact' },
  { href: 'game', title: 'Game' },
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      show: false
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('end', (section) => {
      this.setState({
        current: section
      });
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleNavbar(to) {
    if (to === 'welcoming-section') {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    this.setState({
      current: to
    });
  }

  render() {
    return (
      <NavSection active={this.state.show}>
        <SectionUl>
          {
            sections.map(e =>(
              <NavItems key={e.href}>
                <NavLink
                  activeClass="active"
                  to={e.href}
                  spy
                  smooth
                  duration={500}
                  offset={0}
                  onSetActive={to => this.toggleNavbar(to)}
                >
                  <div className="text">
                    {e.title} 
                  </div>
                </NavLink>
              </NavItems>
            ))
          }
        </SectionUl>
      </NavSection>
    );
  }
}

export default Navbar;