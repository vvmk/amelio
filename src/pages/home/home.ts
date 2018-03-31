import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	user = {
		name: '',
		email: '',
		companies: []
	}

	constructor(public navCtrl: NavController, public events: Events) {
		events.subscribe('user:loggedin', userLoginEventData => {
			this.user.email = userLoginEventData[0];
		});
	}

	openShareModal() {
		// open the modal with the share link
		console.log("share modal");
	}

	showAccountsPage() {
		this.navCtrl.push('AccountsPage');
	}

	showLoginPage() {
		this.navCtrl.push('LoginPage');
	}
}
