<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWootric',
  data() {
    return {
        msg: 'My good wootric project'
    }
  },
  created() {
    console.log("Wootric setup on creation!")
    window.wootric_survey_immediately = true; //Overwrites sampling settings and forces the server to return true to all survey requests.
    window.wootric_no_surveyed_cookie = true; //Disables the cookie writing after a survey is taken effectively disabling any client side mechanisms to prevent multiple surveys from being rendered.
    // END OF TEST ONLY FLAGS
    window.wootricSettings = {
        email:'nps@example.com', //TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
        created_at: 1234567890, //TODO:replace it with date when your customer signed up           
        account_token: 'NPS-xxxxxxx' //TODO:replace it with your account token       
    };
    window.wootric('run');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
