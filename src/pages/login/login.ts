import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserServiceProvider } from '../../providers/user-service/user-service';

 @IonicPage()
 @Component({
 	selector: 'page-login',
 	templateUrl: 'login.html',
 })
 export class LoginPage {
 	method: string = "login";
 	name: string = "Vincent Masiello";

 	login = {
 		email: '',
 		password: ''
 	};

 	register = {
 		name: '',
 		email: '',
 		password: '',
 		confirm: ''
 	};

 	auth = firebase.auth;

 	constructor(public navCtrl: NavController,
 		public navParams: NavParams,
 		private userService: UserServiceProvider,
 		private afAuth: AngularFireAuth,
 		public events: Events) {

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad LoginPage');
 	}

 	submitLogin() {
 		let email: string  = this.login.email;
 		if (!email || !this.login.password) {
 			this.userService.displayAlert("Empty Field", "Please fill out all the fields.");
 			return;
 		}

 		this.userService.logOn(email, this.login.password)
 		.then(response => {
 			if (this.userService.success) {
 				this.returnHome(email);
 			} else {
 				this.login.email = '';
 				this.login.password = '';
 			}
 		});
 	}

 	submitCreateAccount() {
 		if (this.register.password != this.register.confirm) {
 			this.userService.displayAlert("Password mismatch", "Try again, bozo.");
 			this.register.password = '';
 			this.register.confirm = '';
 		} else { // all is well
 			this.registerAccount();
 		}
 	}

 	registerAccount() {
 		this.afAuth.auth.createUserWithEmailAndPassword(this.register.email, this.register.password)
 		.then(res => this.regSuccess(res))
 		.catch(err => this.userService.displayAlert('Error!', err));
 	}

 	regSuccess(response) {
 		let email = this.register.email;
 		this.userService.logOn(email, this.register.password)
 		.then(res => this.returnHome(email));
 	}

 	returnHome(email: string) {
 		this.register.password = '';
 		this.register.confirm = '';
 		this.login.password = '';

 		let eventData = {
 			email: email,
 			name: this.name
 		}
 		this.events.publish('user:loggedin', eventData);
 		this.navCtrl.pop()
 	}
 }
