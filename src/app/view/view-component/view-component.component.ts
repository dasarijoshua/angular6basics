import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  done: boolean = false;
  username: any;
  response: any;
  constructor(private testSerivceView: TestService, private http: HttpClient) {

  }

  ngOnInit() {
    //Calling Github API through http.get()
    // console.log("Calling github API");
    // this.getGithubAPI();


    // this.testSerivceView.printAtConsole();

    //Without Callback
    // let user = this.getUser();
    // console.log("username: ", user["name"]);

    //With callback
    // this.getUserCallback(user => {
    //   console.log("callback-> username: ", user["name"]);
    // });

    //with Promise
    // this.getUserPromise().then(user => {
    //   console.log("promise-> username: ", user["name"]);
    // })

    //With Promise
    // this.isItDoneYet.then(ok => { console.log(ok) }).catch(err => { console.error(err) });

    //Observables
    const button = document.querySelector('button');
    const observable = Observable.fromEvent(button, 'click').subscribe(res => console.log(res));

  }

  getGithubAPI() {
    let observable = this.http.get("https://api.github.com/users/" + this.username);
    console.log("Response for Github API: ", observable);
    observable.subscribe((response) => 
    this.response = response
    // console.log("Got the Response: ", response);
    );
  }

  // //Without Callback
  // getUser() {
  //   setTimeout(() => { return { name: 'Joshua' } }, 2000)
  // }

  // //With Callback
  // getUserCallback(user) {
  //   setTimeout(() => { user({ name: 'Joshua' }) }, 5000) //passing an argument to the callback function
  // }

  // //With Promise
  // getUserPromise() {
  //   return new Promise(resolve => {
  //     setTimeout(() => { resolve({ name: 'Joshua' }) }, 2000)
  //   });
  // }

  // //Promise
  // isItDoneYet = new Promise((resolve, reject) => {
  //   if (this.done) {
  //     const workDone = 'This is done.';
  //     resolve(workDone);
  //   } else {
  //     const why = 'Still working on it.';
  //     reject(why);
  //   }
  // });

}
