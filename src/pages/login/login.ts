import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	method: string = "login";
	reg = {
		email: '',
		password: '',
		confirm: ''
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  displayAlert(alertTitle, alertSub) {
  	let alert = this.alertController.create({
  		title: alertTitle,
  		subTitle: alertSub,
  		buttons: ['OK']
  	});
  	alert.present();
  }

  submitLogin() {
  	this.displayAlert("ALERT TITLE", "subtitle");
  }
}
