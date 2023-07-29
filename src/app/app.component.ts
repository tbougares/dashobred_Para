import { Component } from '@angular/core';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce';
  token=localStorage.getItem("token") || ''
  testloading=false;
  constructor(private adminService:AdminService) {
    console.log(this.token)


}
}
