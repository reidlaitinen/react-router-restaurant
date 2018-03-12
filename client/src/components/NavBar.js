import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, logout} from '../fakeAuth'

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const additionalLinks = (history) => {
  if (isAuthenticated()) {
    return (
      <span>
        <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
        {' '}
        <a href="#" onClick={() => {
          logout()
          history.push("/login")
        }}>
          Logout
        </a>
      </span>
    )
  } else {
    return (
      <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    )
  }
}

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
          <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
        </Menu.Item>

        {isAuthenticated ? 
          <Menu.Menu position='right'>
            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
              <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
            </Menu.Item>
          </Menu.Menu>
        :
          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
              <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
            </Menu.Item>
          </Menu.Menu>
        }
      </Menu>
    )
  }
}

export default withRouter(NavBar);