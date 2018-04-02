import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home-popover',
	templateUrl: 'home-popover.html',
})
export class HomePopoverPage {

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public events: Events) {
	}

	showUserMetaPrefsPage() {
		this.events.publish('menu:prefs');
		this.viewCtrl.dismiss();
	}

	showAccountsPage() {
		this.events.publish('menu:accounts');
		this.viewCtrl.dismiss();
	}
}
