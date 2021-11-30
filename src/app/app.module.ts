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
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
