import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {
  isUserLoggedIn: boolean;

  constructor(private httpclient:HttpClient) 
  { 
this.isUserLoggedIn=false;
  }
  setIsUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
 
  getRecipeList(){
    return this.httpclient.get("/app/recipe/list");
  }
  deleteRecipe(recipeid:any){
    return this.httpclient.delete("/app/recipe/delete/"+recipeid);
  }

  updateRecipe(recipe:any){
    return this.httpclient.put("/app/recipe/save/",recipe);
  }
  addRecipe(recipe:any){
    return this.httpclient.post("/app/recipe/save",recipe);
  }
  search(name:any){
    return this.httpclient.get("/app/recipe/list"+name);
  }
}
