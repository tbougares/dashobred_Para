import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin:any;
  login="";
  password="";
  constructor(private adminService:AdminService ,private route :Router) { }

  ngOnInit(): void {
    this.admin={login : "" , password :""}
  }
  SignIn(){
    console.log(this.admin)
    this.adminService.AjouteAdmin(this.admin).subscribe(res=>
      {
        console.log(res);
        var req:any
        req = res.valueOf();
        console.log(req.message);
        if(req.message == true){
          localStorage.setItem('token',req.token)
          this.adminService.testGuard=true
          this.route.navigate(['/admin'])
          alert("Connectéé avec succsu");

        }
        else{
          alert("L ' un de deux incorrect");
        }
      })
    console.log("hy")
    console.log(localStorage.getItem("token"))

  }

}
