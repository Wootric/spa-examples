# nuxt-js-example

> My good wootric project

## Setup
1. Add wootric script to `/nuxt.config.js` file like below
```
head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.wootric.com/wootric-sdk.js' }
    ]
  }
```
2. Add below script on vue instance/component created life cycle hook. Here I have added it in `/omponents/HelloWootric.vue`.
```
window.wootric_survey_immediately = true; //Overwrites sampling settings and forces the server to return true to all survey requests.
window.wootric_no_surveyed_cookie = true; //Disables the cookie writing after a survey is taken effectively disabling any client side mechanisms to prevent multiple surveys from being rendered.
// END OF TEST ONLY FLAGS
window.wootricSettings = {
    email:'nps@example.com', //TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    created_at: 1234567890, //TODO:replace it with date when your customer signed up
    account_token: 'NPS-xxxxxxx' //TODO:replace it with your account token
};
window.wootric('run');
```
3. Update `account_token: 'NPS-xxxxxxx'` in apps wootric snippet under `/components/HelloWootric.vue` file.

## Run
```
cd to_current_directory i.e. vue-cli-example
npm install
npm run dev
```

