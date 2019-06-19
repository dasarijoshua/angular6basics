import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message: string
  sumNum: number = 10;
  add: any;
  showYesterdayClass: boolean = false;

  @Input('user') user: User;


  constructor() {

    setInterval(() => {
      let currentTime = new Date();
      this.message = currentTime.toDateString() + '' + currentTime.toLocaleTimeString();
    }, 1000)
  }

  ngOnInit() {
    // this.add = {
    //   'Name': this.usr,
    //   'Title': 'Software',
    //   'Address': 'IBM EGL Domulr, Bengaluru',
    //   'Phone' : [
    //   ] 
    // }

  }

  showYesterdayClassTrue() {
    this.showYesterdayClass = true;
  }

  addsumNum(a: number, b: number) {
    return a + b
  }

  ngOnDestroy() {
    //called 
  }
}
