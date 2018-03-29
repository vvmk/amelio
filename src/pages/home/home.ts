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
		// important that the target page name be inside quotes
    this.navCtrl.push('accounts');
		console.log("navigate to accounts page");
	}
}
