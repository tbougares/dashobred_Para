import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {
  AjouterProduit=false
  AjouterCategorie=false
  constructor() { }

  ngOnInit(): void {
  }
  funcAjouterProduit(){
    console.log("222");
    this.AjouterProduit=true
    this.AjouterCategorie=false
  }
funcAjouterCategorie(){
    this.AjouterCategorie=true
    this.AjouterProduit=false
  }

}
