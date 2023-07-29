import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  Url = environment.ApiUrl
  testGuard=false;

  AjouteAdmin(admin:any){
    return this.http.post(this.Url+'/Admin/LoginAdmin', admin)}
  async Verif_token(admin:any): Promise<any>{
  //   return this.http.post(this.Url+'/Admin/LoginAdminToken', admin)



    try {
      const response = await this.http.post(this.Url+'/Admin/LoginAdminToken', admin).toPromise();
      return response;
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      throw error;
    }
  }

}
