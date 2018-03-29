import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMetaPrefsPage } from './user-meta-prefs';

@NgModule({
  declarations: [
    UserMetaPrefsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMetaPrefsPage),
  ]
})
export class UserMetaPrefsPageModule {}
