import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DatetimeComponent } from './datetime/datetime.component';

import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatetimeComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ViewModule, HttpClientModule, AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
