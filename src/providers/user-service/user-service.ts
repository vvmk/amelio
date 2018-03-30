import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UserServiceProvider {

	users: AngularFireList<any>;
	success: boolean;

	constructor(private afAuth: AngularFireAuth,
		public alertController: AlertController,
		private firebaseDB: AngularFireDatabase,
		private storage: Storage) {

		this.users = firebaseDB.list('/users');
	}

	displayAlert(alertTitle, alertSub) {
		let alert = this.alertController.create({
			title: alertTitle,
			subTitle: alertSub,
			buttons: ['OK']
		});
		alert.present();
	}

	logOut() {
		this.afAuth.auth.signOut()
		.then(loggedOut => this.displayAlert("BYE!", "Successfully logged out"))
		.catch(err => this.displayAlert("Error: ", err));
	}

	/**
		begin copy paste
	*/
storageControl(action, key?,value?) {
    if (action == 'set'){
      return this.storage.set(key, value);
    }
    if (action == 'get'){
      return this.storage.get(key);
    }
    if (action == 'delete'){
      if (!key) {
        this.displayAlert('Warning','About to delete all user data');
        return this.storage.clear();
      }
      else {
        this.displayAlert( key,'Deleting this users data');
        return this.storage.remove(key);
      }
    }

  }

  saveNewUser(user){
    let userObj = {
      creation: new Date().toDateString(),
      logins: 1,
      rewardCount: 0,
      lastLogin: new Date().toLocaleString(),
      id: ''
    }
    this.users.push({
      username: user,
      creation: userObj.creation,
      logins: userObj.logins,
      rewardCount: userObj.rewardCount,
      lastLogin: userObj.lastLogin
    })
    .then(res => {
      userObj.id = res.key;
      return this.storageControl('set', user, userObj );
    });
    
    return this.storageControl('get', user);
    
  }

  updateUser(theUser,theUserData){
    let newData = {
      creation: theUserData.creation,
      logins: theUserData.logins + 1,
      rewardCount: theUserData.rewardCount,
      lastLogin: new Date().toLocaleString(),
      id: theUserData.id
    }
    this.users.update(newData.id,{
      logins: newData.logins,
      rewardCount: newData.rewardCount,
      lastLogin: newData.lastLogin
    });
    return this.storageControl('set', theUser, newData );  
  }

  logOn(user, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(user,password)
      .then(result => {
        this.storageControl('get',user)
          .then( returned => {
            if (!returned) {
              this.saveNewUser(user)
              .then(res => this.displayAlert(user,'New account saved for this user'));    
            }
            else{
              this.updateUser(user, returned)
              .then(updated => console.log(user ,updated))
            }
          })

          this.success = true;
          return result;
      })
      .catch(err => {
        this.success = false;
        this.displayAlert('Error logging in',err)
        return err;
      });
  }
	/**
		end copy paste
	*/
}
