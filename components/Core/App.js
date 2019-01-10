import React ,{ Component } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
<<<<<<< HEAD
import FAQs from '../FAQs'
=======
import Contact from '../Contact'
import Loading from './Loading';

const Section = styled(Element)`
  padding: 80px 0px;
  text-align: center;

  @media(max-width: 768px) {
    padding: 50px 0;
  }
`
>>>>>>> c7f22d61ce8682c84af5054f5a09bb5e1b055eee

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  
  render () {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <Loading />
      )
    }
    return (
      <div>
        <Navbar />
        <Home />
<<<<<<< HEAD
        <What />
        <Who />
        <Where />
        <When />
        <FAQs />
=======
        <Section name = "what">
          <What />
        </Section>
        <Section name = "who">
          <Who />
        </Section>
        <Section name = "where" >
          <Where />
        </Section>
        <Section name = "when" >
          <When />
        </Section>
        <Section name = "contact" >
          <Contact />
        </Section>
>>>>>>> c7f22d61ce8682c84af5054f5a09bb5e1b055eee
      </div>
    )
  }
}

export default App