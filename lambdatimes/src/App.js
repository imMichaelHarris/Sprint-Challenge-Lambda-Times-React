import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Login from "./components/Login";
import authenticate from "./components/authenticate";
import "bootstrap/dist/css/bootstrap.min.css";

const ComponentWithAuthenticate = authenticate(Content)(Login);
//handle state for modal pass state to top bar
//handle modal and astate and pass func to button pas state balue
//toggle to top bar
//statet auth and topbar

class App extends Component {
  state = {
    loggedIn: false
  };

  toggle = () => {
    this.setState(prevSate => {
      return {
        loggedIn: !prevSate.loggedIn
      };
    });
  };
  logOut = () => {
    localStorage.removeItem("username");
    this.setState({
        loggedIn: false
    })
    window.location.reload()
  }
  render() {
    console.log(this.state.loggedIn)
    return (
      <div className="App">
        <TopBar toggle={this.toggle} logOut={this.logOut} loggedIn={this.state.loggedIn}/>
        <Header />
        <ComponentWithAuthenticate toggle={this.toggle} loggedIn={this.state.loggedIn} logOut={this.logOut} />
      </div>
    );
  }
}

export default App;
