# `angularjs` — the wootric configured project for AngularJS apps

This project is an application skeleton for a typical [Wootric](https://www.wootric.com/) setup web app. You can use it
to quickly bootstrap your wootric setup angular webapp projects.

The app doesn't do much, just shows how to setup the wootric snippet for angularjs projects.


## Getting Started

To get you started simply follow the instructinos below:

### Prerequisites

You need git to clone the [spa-examples](https://github.com/Wootric/spa-examples) repository. You can get git from [here](https://git-scm.com/).

We also use a number of Node.js tools to initialize and test `angularjs` example project. You must have Node.js
and its package manager (npm) installed. You can get them from [here](https://nodejs.org/).

### Clone `spa-examples`

Clone the `spa-examples` repository using git:

```
git clone https://github.com/Wootric/spa-examples.git
cd spa-exaples
cd angularjs
npm install
```

### Setup Wootric

1. Load Wootric JS SDK: Open `app/index.html` and add below script tag to the file where you load all other 3rd party scripts:

```
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>
```

2. Create Factory: Open `app/app.js` and add below code snippet to create `wootricFactory` so it can be fired in a single-page application with `wootricFactory.run()`:
```
app.factory('wootricFactory', function() {
  window.wootricSettings = {
    email: 'nps@example.com',// TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
    account_token: 'NPS-xxxxxxxx' // This is your unique account token.
  };
  return {
    run: function() {
      window.wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
      window.wootric_no_surveyed_cookie = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.     
      window.wootric("run");
    }
  }
});
```
>> Note: Update `account_token` with your account token.

3. Using the factory in your controller:
```
app.controller('myController', [
  'wootricFactory',
  function(wootricFactory){
    wootricFactory.run();
  }
]);
```

### Running the Application
* `npm start`
* Visit your app at http://localhost:8000

*app built using [angular-seed](https://github.com/angular/angular-seed)*