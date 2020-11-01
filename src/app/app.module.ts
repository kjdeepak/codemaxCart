import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavigationComponent } from './shared/components/side-navigation/side-navigation.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CompanyComponent,
    ContactComponent,
    HeaderComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
