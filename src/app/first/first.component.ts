import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
import { TestService } from '../test.service';

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

  inputText: string;
  inputText2: string;
  @Input('user') user: User;


  constructor(private testService: TestService) {

    setInterval(() => {
      let currentTime = new Date();
      this.message = currentTime.toDateString() + '' + currentTime.toLocaleTimeString();
    }, 1000)

    // let testService = new TestService();
  }

  // this.testService.printAtConsole();

  ngOnInit() {
    // this.add = {
    //   'Name': this.usr,
    //   'Title': 'Software',
    //   'Address': 'IBM EGL Domulr, Bengaluru',
    //   'Phone' : [
    //   ] 
    // }
    this.inputText = "Hello";

    // let testService = new TestService();
    this.testService.printAtConsole();


  }

  showYesterdayClassTrue() {
    this.showYesterdayClass = !this.showYesterdayClass ;
  }

  addsumNum(a: number, b: number) {
    return a + b
  }

  ngOnDestroy() {
    //called 
  }
}
