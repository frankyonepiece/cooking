import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  getPsitions=[{
    getP1:0,
    getP2:0
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.leadDataFromList2());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

  leadDataFromList2(){
    this.getPsitions.push({
      getP1:this.navParams.get("position_1"),
      getP2:this.navParams.get("position_2")
    });
  }

}
