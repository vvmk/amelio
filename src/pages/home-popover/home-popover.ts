import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home-popover',
	templateUrl: 'home-popover.html',
})
export class HomePopoverPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	showUserMetaPrefsPage() {
		this.navCtrl.push('UserMetaPrefsPage');
	}

	showAccountsPage() {
		this.navCtrl.push('AccountsPage');
	}
}
