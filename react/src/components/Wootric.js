import React, { Component } from 'react';

import * as Defaults from '../config/defaults'

class Wootric extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let setupScript = document.createElement('script');
    setupScript.type = 'text/javascript';
    setupScript.async = true;
    setupScript.innerHTML = `
       wootric_survey_immediately = ${Defaults.WOOTRIC_SURVEY_IMMEDIATELY};
       window.wootricSettings = {
          email: 'customer@example.com',
          created_at: 1234567890,
          account_token: "${Defaults.WOOTRIC_ACCOUNT_TOKEN}"
      };
    `;
    document.body.appendChild(setupScript);

    // Beacon
    let beacon = document.createElement('script');
    beacon.type = 'text/javascript';
    beacon.async = true;

    beacon.src = 'https://disutgh7q0ncc.cloudfront.net/beacon.js';
    beacon.onload = function() {
      window.wootric('run');
    };
    document.body.appendChild(beacon);
  }

  render() {
    return (
      <div />
    );
  }
}

export default Wootric;
