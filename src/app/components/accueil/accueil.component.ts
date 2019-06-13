import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = { "Users":[{id:1, name:"Véro"},{id:2, name:"Thierry"},{id:3, name:"Laurent"},{id:4, name:"Tanguy"}], "status":"200" };

  getKey(el: {}){
    return Object.keys(el)[0];
  }
  
  getValue(el: { [x: string]: any; }){
    return el[this.getKey(el)];
  }

}
