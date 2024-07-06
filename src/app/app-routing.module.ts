import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./pages/pages.module').then(m=>m.PagesModule)},
  // {path: '', redirectTo : 'reportes',  pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo : 'auth',  pathMatch : 'full'},
  {path: '**', redirectTo : 'auth'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
