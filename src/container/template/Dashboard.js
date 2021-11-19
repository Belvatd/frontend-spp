import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Dashboard extends Component {
  state = {
    login: true,
    role: '',
  };

  handleLogout = () => {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    return this.props.history.push('/');
  };

  getRole = () => {
    // const role = localStorage.getItem('role');
    this.setState({
      role: 'admin',
    });
  };

  componentDidMount() {
    this.getRole();
  }
  render() {
    return (
      <>
        {this.state.role === 'admin' || this.state.role === 'petugas' ? (
          <div>
            <div>Site Admin / Petugas</div>
            <Button onClick={this.handleLogout}>Logout</Button>
          </div>
        ) : (
          <div>
            <div>Site Siswa</div>
            <Button onClick={this.handleLogout}>Logout</Button>
          </div>
        )}
      </>
    );
  }
}

export default Dashboard;
