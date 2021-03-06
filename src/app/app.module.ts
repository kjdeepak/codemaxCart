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
import { TopNavigationComponent } from './shared/components/top-navigation/top-navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CompanyComponent,
    ContactComponent,
    HeaderComponent,
    SideNavigationComponent,
    TopNavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
