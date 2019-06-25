import { Component } from '@angular/core';
import { User } from './first/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;
  routes = [{ linkName: 'Home', url: 'home' },
  { linkName: 'View', url: 'view' }, { linkName: 'First', url: 'first' }];


  constructor() {
    this.user = new User();
    this.user.Name = "name";
    this.user.Title = "Software";
    this.user.Address = "IBM EGL Domulr, Bengaluru";
    this.user.Phone = ['1234567890'];
  }

}
