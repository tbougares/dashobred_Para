import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredComponent } from './admin/dashbored/dashbored.component';




const routes: Routes = [
  {path:'admin',component:DashboredComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
