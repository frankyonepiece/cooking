import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}