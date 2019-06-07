import React from 'react';
import {StyledTopBar, Container} from './StyleTopBar'
import Login from './Login'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = (props) => {
  return (
      <StyledTopBar>
      <Container>
        <Container left>
          <span>TOPICS</span><span>SEARCH</span>
          </Container>
        <Container center>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </Container>
        <Container right>
          <span onClick={props.loggedIn ? props.logOut : props.toggle}>{localStorage.getItem("username") ? "Log Out" : "LogIn"}</span>
          </Container>
        </Container>
      </StyledTopBar>
  )
}

export default TopBar;