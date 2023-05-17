import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userId: any;
  user: any;
  recipeList: any;
  searchedRecipe: any;
  userToUpdate = {
    userid: '',
    username: '',
    email: '',
    mobile: '',
    gender: '',
  };
  recipeToUpdate = {
    recipeid: '',
    name: '',
    ingredients: '',
    description: '',
    preparationtime: '',
    image: '',
    likes: '',
    userid: '',
  };

  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit(): void {
    this.userId = this.recipeService.getUserId();
    console.log('ID= ' + this.userId);
    this.getUserById(this.userId);
    this.getRecipesFromService(this.userId);
  }

  getUserById(userId: any) {
    this.recipeService.getUserByIdFromDB(userId).subscribe((data: any) => {
      this.user = data;
    });
  }

  edit(user: any) {
    this.userToUpdate = user;
  }

  updateUser() {
    return this.recipeService
      .updateUserById(this.userToUpdate)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }

  getRecipesFromService(userId: any) {
    this.recipeService
      .getRecipeByUserIdFromDB(userId)
      .subscribe((data: any) => {
        this.recipeList = data;
      });
  }

  editRecipe(recipe: any) {
    this.recipeToUpdate = recipe;
  }

  updateRecipe() {
    this.recipeService
      .updateRecipe(this.recipeToUpdate)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }

  deleteRecipeByRecipeId(recipeId: any) {
    alert('You are deleting this item');
    return this.recipeService
      .deleteRecipeByRecipeIdFromDB(recipeId)
      .subscribe((data: any) => {
        this.searchedRecipe = data;
        this.ngOnInit();
      });
  }
}
