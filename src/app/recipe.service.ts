import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private httpclient: HttpClient) {
    //
  }

  getAllRecipesFromDB() {
    return this.httpclient.get('/app/recipe/list');
  }
}
