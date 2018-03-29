import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})

export class AccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsPage');
  }

  addAccount() {
  }

  changeTileUponSuccessfulVerification() {

  }

  redirect(url: String) {

  }

  checkIfAuthenticated(): Boolean {
    return true;
  }

}
