import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopResultItemDetailsComponent } from './pages/shop-result-item-details/shop-result-item-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'shop', component: ShopComponent },
	{ path: 'details/:id', component: ShopResultItemDetailsComponent },
	{ path: 'userInfo/:id', component: UserInfoComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: 'signUp', component: SignUpComponent },
	{ path: 'logIn', component: LogInComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '/404' }
	/* { path: 'shop/:id', component: ShopListComponent }, */
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
