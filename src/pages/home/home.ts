import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { List2Page } from '../list2/list2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  //had variable bach naficher list dyal les carts li kayeni fi Home.html
  //had variable kaymiyez bi anak t9ed t7et fiha 2 dyal les variable wtkhedem biom fi loop w7eda
  posts=[{
      background:"",
      title:"",
      size:""
    }];
  
  constructor(public navCtrl: NavController , public http: Http ) {
    //hadi bach n3ayet 3la function li sawebt bach ghi tkhdem had l page tkhadem function
    this.getLoadFile();
  
  }

  //had function hiya li mes2ola bach tjib json file 
  getLoadFile(){
    // had setar hwa li kayejib json file w kay7eto fi variable data
    this.http.get('assets/file_json/jsonFile.json').map(res => res.json())
    .subscribe(data => {
      //variable data fiha l file kolo t9ed tseta3melha

      var count = Object.keys(data.list).length;
      //had loop bach n7et bachground li kayena fi json file fi variable bachground
      for(let i = 0; i < count; i++)
      {
        var siz= Object.keys(data.list[i].array).length;
        this.posts.push({
            background : data.list[i].background, 
            title : data.list[i].title,
            size:""+siz
        })
      }
    }); 
    
  }


  nextPage(dataPassed){
    this.navCtrl.push(List2Page,{pass:dataPassed});
  }
  
  // had lfunction dyal recherche hateha hna bach nesta3mela fi page list2
  /*
  */

  
}