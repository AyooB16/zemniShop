import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutUsComponent } from './components/Pages/about-us/about-us.component';
import { ShopDetailsComponent } from './components/Pages/shop-details/shop-details.component';
import { ShopCartComponent } from './components/Pages/shop-cart/shop-cart.component';
import { CheckOutComponent } from './components/Pages/check-out/check-out.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    ShopDetailsComponent,
    ShopCartComponent,
    CheckOutComponent,
    BlogComponent,
    ContactComponent,
    ErrorComponent,
    AdminComponent,
    ProduitComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
