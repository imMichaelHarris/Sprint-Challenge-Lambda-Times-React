import React from 'react';
import {StyledTopBar, Container} from './StyleTopBar'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
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
          <span>LOG IN</span>
          </Container>
        </Container>
      </StyledTopBar>
  )
}

export default TopBar;