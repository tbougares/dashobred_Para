import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredComponent } from './admin/dashbored/dashbored.component';
import { LoginComponent } from './admin/login/login.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';




const routes: Routes = [
  {path:'admin',component:DashboredComponent,canActivate:[GuardAdminGuard]},
  {path:'login',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
