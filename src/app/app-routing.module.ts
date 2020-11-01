import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{path: ' ', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'product', component: ProductComponent},
{path: 'company', component: CompanyComponent},
{path: 'contact', component: ContactComponent},
{path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
