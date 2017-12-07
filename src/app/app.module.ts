import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingsPage } from '../pages/settings/settings';
import { SplishSplashScreenPage } from '../pages/splish-splash-screen/splish-splash-screen';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileProvider } from '../providers/file/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritePage,
    SettingsPage,
    SplishSplashScreenPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritePage,
    SettingsPage,
    SplishSplashScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
    FileProvider
  ]
})
export class AppModule {}
