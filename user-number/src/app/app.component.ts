import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-number';
  userModel = new User(555555555);
}

export class User {
  
	constructor(
		public phone: number
	){}
}
