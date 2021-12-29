import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { CartComponent } from './pages/cart/cart.component';
import { FromBlogComponent } from './components/from-blog/from-blog.component';
import { CaruselProductLargeComponent } from './components/carusel-product-large/carusel-product-large.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarruselProductShortComponent } from './components/carrusel-product-short/carrusel-product-short.component';
import { CarruselCategoriesComponent } from './components/carrusel-categories/carrusel-categories.component';
import { CarruselProductGroupComponent } from './components/carrusel-product-group/carrusel-product-group.component';
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
		NotFoundComponent,
		SignUpComponent,
		LogInComponent,
		CheckoutComponent,
		UserInfoComponent,
  CartComponent,
  FromBlogComponent,
  CaruselProductLargeComponent,
  SearcherComponent,
  BannerComponent,
  CarruselProductShortComponent,
  CarruselCategoriesComponent,
  CarruselProductGroupComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent],

})
export class AppModule { }
