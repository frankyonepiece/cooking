import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

// hade provider ra derto gha bi lghalat ta9eriban w mabghitch n7ayedo 7it 3aref bli ghadi nesta3mlo mn ba3ed
@Injectable()
export class FileProvider {

  constructor(public http: Http) {
  }

  LoadFile(){
    // had setar hwa li kayejib json file w kay7eto fi variable data
    this.http.get('assets/file_json/jsonFile.json').map(res => res.json())
    .subscribe(data => {
      
    }); 
    
  }

}
