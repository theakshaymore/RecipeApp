import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private httpclient: HttpClient) {
    //
  }

  //FOR USER

  //FOR RECIPE
  getAllRecipesFromDB() {
    return this.httpclient.get('/app/recipe/list');
  }
  getRecipeByIdFromDB(recipeId: any) {
    return this.httpclient.get('/app/recipe/list/' + recipeId);
  }

  //FOR COMMENT
}
