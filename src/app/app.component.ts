import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingsPage } from '../pages/settings/settings';
import { SplishSplashScreenPage } from '../pages/splish-splash-screen/splish-splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any , icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar,public modalCtrl: ModalController  , public splashScreen: SplashScreen) {
    
    //splash screen
    this.platform.ready().then(() => {
        statusBar.styleDefault();
        let splash = modalCtrl.create(SplishSplashScreenPage);
        splash.present();
      });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'المفضله', component: FavoritePage, icon: "md-heart" },
      { title: 'الفئات', component: HomePage , icon: "md-basket"},
      { title: 'موقع ويب ', component: FavoritePage , icon: "md-globe"},
      { title: 'أفضل', component: FavoritePage , icon: "md-bowtie"},
      { title: 'اتصل بنا', component: FavoritePage , icon: "md-contact"},
      { title: 'إعدادات', component: SettingsPage , icon: "md-build"}
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
