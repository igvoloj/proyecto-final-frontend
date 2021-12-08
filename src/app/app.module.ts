import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BreadcumbComponent } from './shared/breadcumb/breadcumb.component';
import { HeroComponent } from './shared/hero/hero.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';
import { ShopResultsComponent } from './components/shop-results/shop-results.component';
import { ShopResultItemComponent } from './components/shop-result-item/shop-result-item.component';
import { ShopDiscountSliderComponent } from './components/shop-discount-slider/shop-discount-slider.component';
import { ShopDiscountSliderItemComponent } from './components/shop-discount-slider-item/shop-discount-slider-item.component';
import { ShopResultItemDetailsComponent } from './components/shop-result-item-details/shop-result-item-details.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
		ShopListComponent,
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
	bootstrap: [AppComponent]
})
export class AppModule { }
