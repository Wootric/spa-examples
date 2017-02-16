import Ember from 'ember';
import config from  '../config/environment'; 

export default Ember.Component.extend({
  setup: function() {
    if (config.environment === 'development') {
      window.wootric_survey_immediately = true;
      window.wootric_no_surveyed_cookie = true;
    }

    window.wootricSettings = {
      account_token: 'NPS-XXXXXXXX',
      email: 'customer@example.com',
      created_at: 1234567890
    };
  }.on('init')
});
