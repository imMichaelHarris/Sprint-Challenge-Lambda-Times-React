import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button
} from "reactstrap";

class Login extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    modal: this.props.loggedIn
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

//   compnentDidUpdate(prevProps){
//       if(prevProps !== this.props){
//           this.setState({
//               modal: this.props.loggedIn
//           })
//       }
//   }

  login = () => {
    if(this.state.usernameInput && this.state.passwordInput){
      localStorage.setItem("username", JSON.stringify(this.state.usernameInput));
      this.setState({
        usernameInput: "",
        passwordInput: ""
      })
      window.location.reload()
    }

  };
  render() {
      console.log('login', this.state.modal)
    return (
      <>
        <Modal isOpen={this.props.loggedIn} toggle={this.props.toggle}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Input
              placeholder="username"
              type="text"
              name="usernameInput"
              value={this.state.usernameInput}
              onChange={this.handleChanges}
            />
            <Input
              placeholder="password"
              type="password"
              name="passwordInput"
              value={this.state.passwordInput}
              onChange={this.handleChanges}
            />
          </ModalBody>
          <ModalFooter><Button onClick={this.login}>Login</Button></ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Login;
