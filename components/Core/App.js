import { Component } from 'react'
import Home from '../Home'
import What from '../What'
import Navbar from './NavBar'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import FAQs from '../FAQs'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
        <What />
        <Who />
        <Where />
        <When />
        <FAQs />
      </div>
    )
  }
}
