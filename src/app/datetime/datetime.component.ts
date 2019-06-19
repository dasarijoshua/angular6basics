import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {

  dateTime: string;

  timeNow: any;
  constructor() { }

  ngOnInit() {
    this.dateTime = new Date().toLocaleDateString();
    console.log("dateTime: ", this.dateTime);

    this.timeNow = new Date();

  }

}
