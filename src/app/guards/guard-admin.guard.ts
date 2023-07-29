import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  token=localStorage.getItem("token") || ''


  constructor(private guard:AdminService , private route: Router,public http:HttpClient){}
  async canActivate(): Promise<boolean>{

  try{
    const result = await this.guard.Verif_token({token:this.token}); // Attendez la résolution de la requête HTTP
    console.log("resultat",result)
    this.guard.testGuard=result.message
    if(!this.guard.testGuard)
      {this.route.navigate(['/login']);
                          return  false }
            return     true;

  }
  catch (error) {
    console.error('Erreur lors de la requête :', error);
      this.route.navigate(['/login']);
      return false; // Bloquer l'accès à la route en cas d'erreur de requête
    }




}
}













  // this.adminService.Verif_token({token:this.token}).subscribe(res=>
  //   {
  //     if(res){

  //       console.log(res,"res")
  //     var req:any
  //     req=res.valueOf();

  //     if(req.message == true) {
  //       this.adminService.testGuard=true

  //     }
  //   }
  //   })

