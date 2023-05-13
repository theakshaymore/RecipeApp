import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReipedetailsComponent } from './reipedetails/reipedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipedetails', component: ReipedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
