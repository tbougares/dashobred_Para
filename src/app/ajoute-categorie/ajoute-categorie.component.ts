import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-ajoute-categorie',
  templateUrl: './ajoute-categorie.component.html',
  styleUrls: ['./ajoute-categorie.component.css']
})
export class AjouteCategorieComponent implements OnInit {
  Cat:any
  refCat=""
  nameCateg=""
  ImgCat=""

  constructor(public Categorie:CategorieService, public Image:ImageService) {  }

  ngOnInit(): void {

    this.Cat={refCat:"",nameCateg:"",ImgCat:""}
  }
  Add(){
    this.Categorie.AjouteCaegorie(this.Cat).subscribe(res=>
      {
        console.log(res)
      })
    console.log("hy")
  }
  SelectImage(e:any ){
    console.log(e.target.value)
    this.Image.registreImage(<File>e.target.files[0])


  }
  add() {

  }
}
