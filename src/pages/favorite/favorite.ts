import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }


}