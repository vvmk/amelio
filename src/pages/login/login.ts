import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';

import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	method: string = "login";

	login = {
		email: '',
		password: ''
	};

	register = {
		email: '',
		password: '',
		confirm: ''
	};

	auth = firebase.auth;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertController: AlertController,
		public userService: UserServiceProvider) {


	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	submitLogin() {
		if (!this.login.email || !this.login.password) {
			this.userService.displayAlert("Empty Field", "Please fill out all the fields.");
		} else {
			console.log(`email: ${ this.login.email }, password: ${ this.login.password }`);
		}
	}

	submitCreateAccount() {
		if (this.register.password != this.register.confirm) {
			this.userService.displayAlert("Password mismatch", "Try again, bozo.");
			this.register.password = '';
			this.register.confirm = '';
 		} else { // all is well
 			console.log("fields good, creating user");
 		}
 	}
 }
