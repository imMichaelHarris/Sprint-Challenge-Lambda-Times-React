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
    modal: false
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => {
    this.setState(prevSate => {
      return {
        modal: !prevSate.modal
      };
    });
  };
  render() {
    return (
      <>
        <Button onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
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
          <ModalFooter><Button>Login</Button></ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Login;
