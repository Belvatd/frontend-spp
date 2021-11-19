import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import FormLogin from '../../components/FormLogin';

class Login extends Component {
  state = {
    showPassword: false,
  };

  handlePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  render() {
    return (
      <Container className="col-md-5 mx-auto">
        <div>
          <h3>Login to Putangina</h3>
          <FormLogin />
        </div>
      </Container>
    );
  }
}

export default Login;
