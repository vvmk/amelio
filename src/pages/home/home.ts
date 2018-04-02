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

	/*"declare a field variable called message of type string"
	message: string = "hello";
	*/

	//"make an array of strings called messages"
	messages: Card[] = [];

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
		events.subscribe('menu:accounts',
			eventData => this.showAccountsPage());
		events.subscribe('menu:prefs',
			eventData => this.showUserMetaPrefsPage());


		//adding data (items) to our array

		this.messages.push(new Card("Pluralsight", "Here is how many hours of PluralSight you have completed today:"));
		this.messages.push(new Card("Codewars", "Look at all of the badges you earned in Codewars!"));
		this.messages.push(new Card("Codeschool", "Here is your current learning path progress:"));

		//this.messages.push("","test string info. have a nice day");
	}

	showMore(event): void {
		let popover = this.popoverCtrl.create('HomePopoverPage');
		popover.present({
			ev: event
		});
	}

	openShareModal(): void {
		// open the modal with the share link
		console.log("share modal");
	}

	showAccountsPage(): void {
		this.navCtrl.push('AccountsPage');
	}

	showUserMetaPrefsPage(): void {
		this.navCtrl.push('UserMetaPrefsPage');
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

class Card{
	header:string;
	message:string;

	constructor(header:string, message:string){
		this.header = header;
		this.message = message;
	}
}
