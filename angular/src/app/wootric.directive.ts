import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWootric]'
})
export class WootricDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
    window['wootric_no_surveyed_cookie'] = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
    window['wootric_survey_immediately'] = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.
    window['wootricSettings'] = {
      email: 'nps@example.com', // TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
      created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
      account_token: 'NPS-xxxxxxxx' // This is your unique account token.
    };
  }

  ngAfterViewInit() {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://cdn.wootric.com/wootric-sdk.js';
    script.async = true;
    script.onload = function() {
      window['WootricSurvey'].run();
    };

    this.elementRef.nativeElement.appendChild(script);
  }
}
