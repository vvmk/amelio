import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'user-info-card',
	templateUrl: 'user-info-card.html'
})
export class UserInfoCardComponent {

	@Input('userName') userData; 

	constructor() {
	}

	ngAfterViewInit() {
		console.log('view did init');
	}
}
