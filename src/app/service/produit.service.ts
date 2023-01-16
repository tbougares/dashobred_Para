import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  Produits:any[]=[]
  constructor(private http:HttpClient) { 

  }
  getAllProduit(){
    return this.http.get('http://localhost:1000/produit/GetAllProduit')
  }
  AjouteProduit(produit:any){
    return this.http.post('http://localhost:1000/produit/Createproduit/',produit)}
  deleProduit(id:any){
    return this.http.delete('http://localhost:1000/produit/DeleteProduit/'+id)

  }
  UpdateProduit(id:any,newProduit:any){
    return this.http.put('http://localhost:1000/produit/UpdateProduit/'+id,newProduit)

  }
}
