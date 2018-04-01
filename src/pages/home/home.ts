import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {
	/*"declare a field variable called message of type string"
	message: string = "hello";
	*/

	//"make an array of strings called messages"
	messages: Card[] = [];


	constructor(public navCtrl: NavController) {
		//adding data (items) to our array

		this.messages.push(new Card("Pluralsight", "Here is how many hours of PluralSight you have completed today:"));
		this.messages.push(new Card("Codewars", "Look at all of the badges you earned in Codewars!"));
		this.messages.push(new Card("Codeschool", "Here is your current learning path progress:"));

		//this.messages.push("","test string info. have a nice day");
		
	}

	openShareModal() {
		// open the modal with the share link
		console.log("share modal");
	}

	showAccountsPage() {
    	this.navCtrl.push('AccountsPage');
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
