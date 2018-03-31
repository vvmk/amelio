import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'user-info-card',
	templateUrl: 'user-info-card.html'
})
export class UserInfoCardComponent {

	@Input('userName') userName; 

	text: string;
	

	constructor() {
		console.log('Hello UserInfoCardComponent Component');
		this.text = 'Hello World';
	}

	ngAfterViewInit() {
		this.text = this.userName;
	}

}
