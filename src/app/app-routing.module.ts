import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/Pages/about-us/about-us.component';
import { CheckOutComponent } from './components/Pages/check-out/check-out.component';
import { ShopCartComponent } from './components/Pages/shop-cart/shop-cart.component';
import { ShopDetailsComponent } from './components/Pages/shop-details/shop-details.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'admin',title:'Admin Panel',component:AdminComponent},
  {path:'home',title:'Zemni Shop',component:HomeComponent},
  {path:'shop',title:'Shop',component:ShopComponent},
  {path:'pages/aboutUs',title:'About Us',component:AboutUsComponent},
  {path:'pages/shopDetails/:id',title:'Shop Details',component:ShopDetailsComponent},
  {path:'pages/shopDetails',title:'shop Details',component:ShopDetailsComponent},
  {path:'pages/shopCart',title:'Shop Cart',component:ShopCartComponent},
  {path:'pages/checkOut',title:'Check Out',component:CheckOutComponent},
  {path:'blog',title:'Blog',component:BlogComponent},
  {path:'contact',title:'Contact Us',component:ContactComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',title:'Page Not Found 404',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
