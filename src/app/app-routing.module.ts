import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReipedetailsComponent } from './reipedetails/reipedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SharerecipeComponent } from './sharerecipe/sharerecipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipedetails', component: ReipedetailsComponent },
  {path:"recipe",component:RecipeComponent},
  {path:"sharerecipe",component:SharerecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
