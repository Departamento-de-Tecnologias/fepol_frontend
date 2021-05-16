import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './shared/faq/faq.component';
import { HomeComponent } from './shared/home/home.component';
//Recordatorio a mi futuro, crear 404
const routes: Routes = [
  {path:'preguntas-frecuentes',component:FaqComponent},
  {path:'', component:HomeComponent , pathMatch: 'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
