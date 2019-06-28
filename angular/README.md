# `angular` — the wootric configured project for Angular apps

This project is an application skeleton for a typical [Wootric](https://www.wootric.com/) setup web app. You can use it
to quickly bootstrap your wootric setup angular webapp projects.

The app doesn't do much, just shows how to setup the wootric snippet for Anuglar projects.

## Getting Started

To get you started simply follow the instructions below:

### Prerequisites

You need git to clone the [spa-examples](https://github.com/Wootric/spa-examples) repository. You can get git from [here](https://git-scm.com/).

We also use a number of Node.js tools to install `angular-cli`. You must have Node.js and its package manager (npm) installed. You can get them from [here](https://nodejs.org/). Then install Angular CLI globally with command `npm install -g @angular/cli`

### Clone `spa-examples`

Clone the `spa-examples` repository using git:

```
git clone https://github.com/Wootric/spa-examples.git
cd spa-exaples
cd angular
npm install
````

### Setup Wootric (using angular directive)
1. Check `src/app/wootric.directive.ts` and setup wootric as required: Update `account_token` with your account token (at line no. 14).

2. Using the directive: Add directive `appWootric` to `src/app/app.component.html` (here at line no. 2).

### Running the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

*app built using [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4*
