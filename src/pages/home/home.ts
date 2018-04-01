import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, Events, Platform } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { AccountModel } from '../../models/account-model';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	user: UserModel = new UserModel('error on platform.ready','error on platform.ready');

	constructor(public navCtrl: NavController,
		public popoverCtrl: PopoverController,
		public events: Events,
		public platform: Platform) {
		
		platform.ready().then(() => {
			//TODO: get cached user data

			// demo data 
			this.updateUserData({
				name: "Vincent Masiello",
				email: "vincentmasiello@gmail.com"
			})
			this.user.addCompany("Zip Code Wilmington");
			this.user.addCompany("Apollic Software, LLC");
		});

		events.subscribe('user:loggedin', 
			userLoginEventData => this.updateUserData(userLoginEventData));
	}

	showMore(event): void {
		if (this.user.email == '') {
			this.showAccountsPage();
		} else {
			let popover = this.popoverCtrl.create('HomePopoverPage');
			popover.present({
				ev: event
			});
		}
	}

	openShareModal(): void {
		// open the modal with the share link
		console.log("share modal");
	}

	showAccountsPage(): void {
		this.navCtrl.push('AccountsPage');
	}

	showLoginPage(): void {
		this.navCtrl.push('LoginPage');
	}

	updateUserData(data: any): void {
		// TODO: pass 'login' or 'registered' or 'data updated', handle accordingly
		// 		instead of just creating a new object every time.
		this.user = new UserModel(data.name, data.email);
	}
}
