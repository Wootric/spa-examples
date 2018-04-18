import { Directive, AfterViewInit, ElementRef } from '@angular/core';


@Directive({
  selector: 'wootric-survey'
})
export class WootricSurveyDirective implements AfterViewInit {

  constructor(private elementRef:ElementRef) {
    window['wootric_no_surveyed_cookie'] = true;
    window['wootric_survey_immediately'] = true;
    window['wootricSettings'] = {
      email: 'customer@example.com',
      created_at: 1234567890,
      account_token: 'NPS-12345678'
    };

    console.log('wootricSettings:', window['wootricSettings']);
  };

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
