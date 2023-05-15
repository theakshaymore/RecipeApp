import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReipedetailsComponent } from './reipedetails/reipedetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ReipedetailsComponent, NotFoundComponent, RecipeComponent, AddrecipeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
