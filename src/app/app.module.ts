import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopDiscountSliderItemComponent } from './components/shop-discount-slider-item/shop-discount-slider-item.component';
import { ShopDiscountSliderComponent } from './components/shop-discount-slider/shop-discount-slider.component';
import { ShopResultItemComponent } from './components/shop-result-item/shop-result-item.component';
import { ShopResultsComponent } from './components/shop-results/shop-results.component';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopResultItemDetailsComponent } from './pages/shop-result-item-details/shop-result-item-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BreadcumbComponent } from './shared/breadcumb/breadcumb.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { NavComponent } from './shared/nav/nav.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'shop', component: ShopComponent },
	{ path: 'details/:id', component: ShopResultItemDetailsComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' }
	/* { path: 'shop/:id', component: ShopListComponent }, */
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavComponent,
		FooterComponent,
		ContactComponent,
		BreadcumbComponent,
		HeroComponent,
		ShopComponent,
		ShopSidebarComponent,
		ShopResultsComponent,
		ShopResultItemComponent,
		ShopDiscountSliderComponent,
		ShopDiscountSliderItemComponent,
		ShopResultItemDetailsComponent,
		LoaderComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent],
	
})
export class AppModule { }
