import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  constructor(public navCtrl: NavController) {

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