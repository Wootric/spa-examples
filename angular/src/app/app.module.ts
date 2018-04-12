import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WootricSurveyDirective } from './wootric-survey.directive';


@NgModule({
  declarations: [
    AppComponent,
    WootricSurveyDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
