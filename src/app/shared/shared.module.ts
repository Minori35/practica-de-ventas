import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from "ngx-loading";
import { MenuComponent } from './menu/menu.component';
import { primeNgMaterialModule } from '../material/primeNgMaterial.module';
import { AngularMaterialModule } from '../material/angular-material.module';


@NgModule({
  declarations: [
    LoadingComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    primeNgMaterialModule,
    AngularMaterialModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.doubleBounce,
       
        backdropBorderRadius: '3px'
    }),

  ],
  exports:[
    LoadingComponent,
    MenuComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
