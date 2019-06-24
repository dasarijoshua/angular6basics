import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DatetimeComponent } from './datetime/datetime.component';

import { ViewModule } from './view/view.module';
import { TestService } from './test.service';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ViewModule, HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
