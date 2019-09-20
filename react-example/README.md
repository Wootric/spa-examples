# `react-example` — the wootric configured project for React apps

This project is an application skeleton for a typical [Wootric](https://www.wootric.com/) setup web app. You can use it
to quickly bootstrap your wootric setup react webapp projects.

The app doesn't do much, just shows how to setup the wootric snippet for React projects.

## Getting Started

To get you started simply follow the instructions below:

### Prerequisites

You need git to clone the [spa-examples](https://github.com/Wootric/spa-examples) repository. You can get git from [here](https://git-scm.com/).

We also use a number of Node.js tools to install `create-react-app`. You must have Node.js and its package manager (npm) installed. You can get them from [here](https://nodejs.org/). We also are using `Yarn` for this project (You can use `npm` instead).

### Clone `spa-examples`

Clone the `spa-examples` repository using git:

```
git clone https://github.com/Wootric/spa-examples.git
cd spa-examples
cd react-example
yarn install/npm install
````

### Setup Wootric (using Wootric component)
1. Check `src/Wootric.js` for main setup and update `WOOTRIC_ACCOUNT_TOKEN` at `src/config/defaults.js` with your `account_token`.

2. `Wootric` component has been added to `src/App.js` on line 23.

### Running the Application

Run `yarn start/npm start` for a dev server. Navigate to `http://localhost:3000/` (or the one on which your development server started on).

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).