import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-number';
  userModel = new User(331112233);

  onClick(): void{
    console.log(this.userModel.phone)
  }
  
}

export class User {

	constructor(
		public phone: number
	){}
}
