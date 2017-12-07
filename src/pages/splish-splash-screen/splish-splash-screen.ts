import { Component } from '@angular/core';
import { NavController , ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen'


@Component({
  selector: 'page-splish-splash-screen',
  templateUrl: 'splish-splash-screen.html',
})
export class SplishSplashScreenPage {

  
  constructor(public navCtrl: NavController,public splashScreen :SplashScreen , public viewCtrl:ViewController) {
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {this.viewCtrl.dismiss();}, 3000);
    }
}
