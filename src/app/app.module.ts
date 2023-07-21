import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboredComponent } from './admin/dashbored/dashbored.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouteCategorieComponent } from './ajoute-categorie/ajoute-categorie.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from './admin/product/product.component';
import { HeaderComponent } from './front-user/header/header.component';
import { FooterComponent } from './front-user/footer/footer.component';
import { ProductsingleComponent } from './front-user/productsingle/productsingle.component';
import { CartComponent } from './front-user/cart/cart.component';
import { CheckoutComponent } from './front-user/checkout/checkout.component';
import { ShopComponent } from './front-user/shop/shop.component';
import { OrdersComponent } from './front-user/orders/orders.component';
import { LoginComponent } from './front-user/login/login.component';
import { SignupComponent } from './front-user/signup/signup.component';
import { ForgetPasswordComponent } from './front-user/forget-password/forget-password.component';
import { ProfileDetailsComponent } from './front-user/profile-details/profile-details.component';
import { AddressComponent } from './front-user/address/address.component';
import { EditAddressComponent } from './front-user/edit-address/edit-address.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    DashboredComponent,
    HomeComponent,

    CategorieComponent,

    AjouteCategorieComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
