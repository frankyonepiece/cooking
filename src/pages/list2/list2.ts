import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ContentPage } from '../../pages/content/content'

@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})

export class List2Page {

  search;

  Title:String;
  items=[{
    background:"",
    title:""
  }];
  position=[{
    P1:0,
    P2:0
  }];
  
  constructor(public navCtrl: NavController, public navParams: NavParams , public http: Http) {
    this.getInfo(); 
  }

  getInfo(){
    this.Title=this.navParams.get("pass");

    this.http.get('assets/file_json/jsonFile.json').map(res => res.json())
    .subscribe(data => {
      
      for(let i=0; i < 5 ; i++)
      {
        if(data.list[i].title == this.Title){
          this.position[0].P1=i;
          i=5;
        }
      }

      var count = Object.keys(data.list[this.position[0].P1].array).length;
      
      for(let i=0; i < count ; i++)
      {
        if(data.list[this.position[0].P1].title == this.Title){
          this.position[0].P2=i;

          this.items.push({
            background : data.list[this.position[0].P1].array[i].background, 
            title : data.list[this.position[0].P1].array[i].title
            });
         }
      }
      
    });
  }


  nextPage(){
    this.navCtrl.push(ContentPage,{position_1:this.position[0].P1 , position_2:this.position[0].P2 });
  }


  

  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }else{
      this.getInfo();
    }
}


}
