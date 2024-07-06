import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { primeNgMaterialModule } from '../material/primeNgMaterial.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from '../shared/loading/loading.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    PagesRoutingModule,
    primeNgMaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
