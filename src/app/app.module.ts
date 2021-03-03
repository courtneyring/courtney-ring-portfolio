import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionTextComponent } from './sections/text/text.component';
import { SectionGridComponent } from './sections/grid/grid.component';
import { SectionPromosComponent } from './sections/promos/promos.component';
import { PromoComponent } from './components/promo/promo.component';
import { SectionContactComponent } from './sections/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { SectionBlockComponent } from './sections/block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SectionTextComponent,
    SectionGridComponent,
    SectionPromosComponent,
    PromoComponent,
    SectionContactComponent,
    WorkComponent,
    SectionBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
