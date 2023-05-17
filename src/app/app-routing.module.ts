import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReipedetailsComponent } from './reipedetails/reipedetails.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './users/users.component';
import { RecipetabeComponent } from './recipetabe/recipetabe.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipedetails', component: ReipedetailsComponent },
  { path: 'recipelist', canActivate: [AuthGuard], component: RecipeComponent },
  { path: 'error', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'recipeTable', component: RecipetabeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'addrecipe',
    canActivate: [AuthGuard],
    component: AddrecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
