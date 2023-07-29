import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorie:any[]=[]
  Url=environment.ApiUrl

  constructor(public http:HttpClient) { }
  AjouteCaegorie(categorie:any){
    return this.http.post(this.Url+'/categorie/CreateCategorie',categorie)}

  getAllcategorie(){
    return this.http.get('http://localhost:1000/categorie/GetAllcategorie')
  }

  delecategorie(id:any){
    return this.http.delete('http://localhost:1000/categorie/Deletecategorie/'+id)

  }
  Updatecategorie(id:any,newcategorie:any){
    return this.http.put('http://localhost:1000/categorie/Updatecategorie/'+id,newcategorie)

  }
}
