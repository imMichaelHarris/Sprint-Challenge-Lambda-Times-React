import React from "react";

const authenticate = Content => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    }

    changeStatus = () => {
      this.setState(prevState => {
        return {
          loggedIn: !prevState.loggedIn
        };
      });
    };

    // logOut = () => {
    //     this.setState({
    //         loggedIn: false
    //     })
    // }
    componentDidMount() {
        if (localStorage.getItem("username")) {
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      }
  
    render() {
      return this.state.loggedIn ? <Content {...this.props}/> : <Login {...this.props}/> 
    }
  };

export default authenticate;
