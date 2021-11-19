import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ROUTES } from '../config';

const FormLogin = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [payloadLogin, setPayloadLogin] = useState({
    username: '',
    password: '',
  });

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputUsername = (value) => {
    const payload = {
      username: value,
      password: payloadLogin.password,
    };
    setPayloadLogin(payload);
  };

  const handleInputPassword = (value) => {
    const payload = {
      username: payloadLogin.username,
      password: value,
    };
    setPayloadLogin(payload);
  };

  const fetchLogin = () => {
    localStorage.setItem('userLogin', JSON.stringify(payloadLogin));
    localStorage.setItem('token', 'ui38GJoiaw7jsind');
    localStorage.setItem('role', 'admin');

    return history.push(ROUTES.DASHBOARD);
  };

  return (
    <Form onSubmit={fetchLogin}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        onChange={(ev) => handleInputUsername(ev.target.value)}
      >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={(ev) => handleInputPassword(ev.target.value)}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={!showPassword ? 'password' : 'text'}
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          checked={showPassword}
          label="Show Password"
          onClick={handlePassword}
        />
      </Form.Group>
      <Button variant="primary" type="Login">
        Submit
      </Button>
    </Form>
  );
};

export default FormLogin;
