import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReipedetailsComponent } from './reipedetails/reipedetails.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipedetails', component: ReipedetailsComponent },
  { path: 'recipelist', component: RecipeComponent },
  { path: 'error', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
