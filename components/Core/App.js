import { Component } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import Contact from '../Contact'

const Section = styled(Element)`
  padding: 80px 0px;
  text-align: center;

  @media(max-width: 768px) {
    padding: 50px 0;
  }
`

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
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
      </div>
    )
  }
}
