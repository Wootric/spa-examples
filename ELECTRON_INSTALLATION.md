# Electron Installation

## Install [@exponent/electron-cookies](https://www.npmjs.com/package/@exponent/electron-cookies)

This package will to provide `document.cookie` support for Electron.

```
yarn add @exponent/electron-cookies
```

## Update your index.html

Add a Content-Security-Policy to the head of your document.
This will to allow the Wootric JavaScript SDK to contact Wootric's servers.

```html
<head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://*.wootric.com/;
                                                      connect-src 'self' https://*.wootric.com/;
                                                      script-src 'unsafe-inline' *;
                                                      style-src 'unsafe-inline' *;
                                                      frame-src *;
                                                      font-src * data:;">
</head>
```

## Update your renderer file

1. Require the `@exponent/electron-cookies` package.
2. Load the Wootric SDK after your Electron app index.js has loaded.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

// Require the package
const ElectronCookies = require('@exponent/electron-cookies');
// Set your domain
ElectronCookies.enable({ origin: 'https://your.domain.com' });

// Configure your Wootric settings
window.wootric_survey_immediately = true;
window.wootricSettings = {
  email: 'customer@example.com',
  created_at: 1234567890,
  account_token: 'NPS-XXXXXXXX' // Add your account token
};

// Inject the script into your Electron app after index.js
window.onload = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.wootric.com/wootric-sdk.js";
  script.onload = () => {
    window.wootric('run');
  }
  document.body.appendChild(script);
};
```
