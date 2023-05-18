import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface User {
  userid: any;
  username: any;
  email: any;
  mobile: any;
  gender: any;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private userId: any;
  isUserLoggedIn: boolean;
  loginStatusChanged: Subject<void> = new Subject<void>();

  constructor(private httpclient: HttpClient) {
    this.isUserLoggedIn = false;
  }

  setUserId(userId: any) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.notifyLoginStatusChange();
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  notifyLoginStatusChange() {
    this.loginStatusChanged.next();
  }

  //FOR USER
  getAllUsersInfo() {
    return this.httpclient.get('/app/user/list');
  }
  deleteUser(id: any) {
    return this.httpclient.delete('/app/user/list/' + id);
  }
  deleteUserAndRecipeByUserId(userId: any) {
    return this.httpclient.delete('/app/user/delete/userid/' + userId);
  }
  SearchUser(name: any) {
    return this.httpclient.get('/app/user/list/username/' + name);
  }
  updateUser(user: any) {
    return this.httpclient.put('/app/user/list/', user);
  }
  getUserByEmailAndPasswordFromDB(email: any, password: any) {
    // return this.httpclient.get(
    //   '/app/user/list/login/' + email + '/' + password
    // );
    const queryParams = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.httpclient.get('/app/user/list/login', { params: queryParams });
  }

  getUserByIdFromDB(userId: any) {
    return this.httpclient.get('/app/user/list/' + userId);
  }

  updateUserById(user: any) {
    return this.httpclient.put('/app/user/list', user);
  }

  //FOR RECIPE
  getAllRecipesFromDB() {
    return this.httpclient.get('/app/recipe/list');
  }
  getRecipeByIdFromDB(recipeId: any) {
    return this.httpclient.get('/app/recipe/list/' + recipeId);
  }
  getRecipeByNameFromDB(name: any) {
    return this.httpclient.get('/app/recipe/list/name/' + name);
  }
  getRecipeByUserIdFromDB(userId: any) {
    return this.httpclient.get('/app/recipe/list/userid/' + userId);
  }
  deleteRecipeByRecipeIdFromDB(recipeid: any) {
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
  addLikeInDB(recipe: any) {
    return this.httpclient.put('/app/recipe/save/', recipe);
  }

  //FOR COMMENT
  getCommentsByRecipeIdFromDB(recipeId: any) {
    return this.httpclient.get('/app/comment/list/recipename/' + recipeId);
  }

  getUserNameByRecipeIdFromDB(recipeId: any) {
    return this.httpclient.get('/app/comment/list/username/' + recipeId);
  }
  addCommentInDB(values: any) {
    return this.httpclient.post('app/comment/list', values);
  }
}
