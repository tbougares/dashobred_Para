import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';
import { ImageService } from 'src/app/service/image.service';
import { ProduitService } from 'src/app/service/produit.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Produit:any
  refProd=""
  nameProd=""
  quantite=""
  prixProd=""
  categories:any 
  nameCat=""
  
  index=0
  loading = true
  tab=[1,2,3,4]
  Tab_Produit:any[]=[]
  
  public  Produits= new FormGroup( {
    refProd:new FormControl('',[Validators.required ]),
    nameProd:new FormControl('',[Validators.required ]),
    quantite: new FormControl('',[Validators.required]),
    prixProd: new FormControl('',[Validators.required]),
    CategoriProd:new FormControl(''),
    
    photoProd:new FormControl(''),
    descProd:new FormControl('',[Validators.required ]),
    stock:new FormControl('',[Validators.required ]),
    
  })
  


constructor(public serviceProduit:ProduitService,public serviceCategorie:CategorieService,public imageSereice:ImageService) { 
  
  this.serviceCategorie.getAllcategorie().subscribe(res=>{
    if(res.valueOf())
    { var rep:any  
    rep=res.valueOf()
    this.serviceCategorie.categorie=rep;
    
    this.loading =false
    console.log(this.categories)

    console.log(rep)}}) 
}

ngOnInit(): void {
//   this.Produit={
// typRef:'',typ:''
// Hedhi ray m tjich y si taher
//  }

}

Add(){
  
  this.Produits.get("CategoriProd")?.setValue(this.categories)
  console.log(this.Produits.value.CategoriProd)
  this.Produits.get("photoProd")?.setValue(this.imageSereice.img[0])
  console.log(this.Produits.value.photoProd)
  console.log(this.imageSereice.img)
  var Produit
  Produit={
    refProd: this.Produits.value.refProd,
    nameProd:this.Produits.value.nameProd,
    quantite:this.Produits.value.quantite,
    prixProd:this.Produits.value.prixProd,
    CategoriProd:this.Produits.value.CategoriProd,
    photoProd:this.Produits.value.photoProd,
    descProd:this.Produits.value.descProd,
    stock:this.Produits.value.stock,
    photosProd:this.imageSereice.img}
  console.log("eeeeeeee")
  // this.Produits.get("CategoriProd")?.setValue(this.categories)
  //
  // this.Produits.get("photosProd")?.setValue(this.imageSereice.img)
  //this.Produits.get("photoProd")?.setValue(this.imageSereice.img[0])
  console.log(this.Produits.value)
  console.log(Produit)

  this.serviceProduit.AjouteProduit(Produit).subscribe(res=>
    {
      var obj:any
      obj=res.valueOf()

      console.log(obj)
    
    })

  console.log("eeeeeeee1")

}
selectCategorie(e:any){
  console.log("hhhh")
  console.log(e.target.value);
  console.log(e.target.value)
  this.categories=this.serviceCategorie.categorie[e.target.value]._id
  console.log(this.categories)
  
  this.index=e.target.value
}
SelectImage(e:any){
  
  console.log(e.target.value)
  this.imageSereice.registreImageMuliple(<File>e.target.files[0])
}
}
