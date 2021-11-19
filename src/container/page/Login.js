import React, { Component } from 'react';

import TemplateLogin from '../template/Login';

class Login extends Component {
  render() {
    return <TemplateLogin {...this.props} action={'login'} />;
  }
}

export default Login;
