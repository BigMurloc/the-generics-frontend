import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeHeaderComponent } from './components/header/home-header/home-header.component';
import { OrderComponent } from './components/order/order.component';
import { ShopComponent } from './components/shop/shop.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    StoreComponent,
    HomeHeaderComponent,
    OrderComponent,
    ShopComponent,
    TourListComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
