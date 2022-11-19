import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path:'home',title:'home',component:HomeComponent},
  {path:'shop',title:'shop',component:ShopComponent},
  {path:'pages/aboutUs',title:'about us',component:AboutUsComponent},
  {path:'pages/shopDetails',title:'shop details',component:ShopDetailsComponent},
  {path:'pages/shopCart',title:'shop cart',component:ShopCartComponent},
  {path:'pages/checkOut',title:'check out',component:CheckOutComponent},
  {path:'blog',title:'blog',component:BlogComponent},
  {path:'contact',title:'contactMe',component:ContactComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',title:'page not found 404',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
