import React, { Component } from 'react'
import styled from 'styled-components'
import font from '../../config/fonts'
import color from '../../config/color'

const MenuStyle = styled.li`
    cursor: pointer;
    font-weight: bold;
    color: ${color.menu};
    font-size :${font.Menu};
`
const Menu = (props) => (
    <MenuStyle>{props.menu}</MenuStyle>
)


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu menu = "List[0]" />
        <Menu menu = "Home" />
        <Menu menu = "Home" />
        <Menu menu = "Home" />
      </div>
    )
  }
}

