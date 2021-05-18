import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './base/layouts/faq-page/faq-page.component';
import { HomePageComponent } from './base/layouts/home-page/home-page.component';
//Recordatorio a mi futuro, crear 404
const routes: Routes = [
  {path:'preguntas-frecuentes',component:FaqPageComponent},
  {path:'', component:HomePageComponent , pathMatch: 'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
