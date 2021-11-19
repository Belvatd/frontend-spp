import React, { Component } from 'react';

import TemplateDashboard from '../template/Dashboard';

class Dashboard extends Component {
  render() {
    return <TemplateDashboard {...this.props} title={'Dashboard'} />;
  }
}

export default Dashboard;
