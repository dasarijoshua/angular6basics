import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  printAtConsole(){
    console.log("----> This is a Service!!")
  }

}
