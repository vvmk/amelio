import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

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
