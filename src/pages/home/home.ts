import { Component } from '@angular/core';
import { IonicPage, NavController, Events, Platform } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { AccountModel } from '../../models/account-model';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	user: UserModel = new UserModel('','');

	constructor(public navCtrl: NavController,
		public events: Events,
		public platform: Platform) {
		
		platform.ready().then(() => {
			//TODO: get cached user data
			this.updateUserData({
				name: "Marshall Banana",
				email: "noodleking@electricnoodlesquad.com"
			});
		});

		events.subscribe('user:loggedin', 
			userLoginEventData => this.updateUserData(userLoginEventData));
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
