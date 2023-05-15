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
  deleteRecipe(recipeid: any) {
    return this.httpclient.delete('/app/recipe/delete/' + recipeid);
  }

  updateRecipe(recipe: any) {
    return this.httpclient.put('/app/recipe/save/', recipe);
  }
  addRecipe(recipe: any) {
    return this.httpclient.post('/app/recipe/save', recipe);
  }
  search(name: any) {
    return this.httpclient.get('/app/recipe/list' + name);
  }
  //FOR COMMENT
}
