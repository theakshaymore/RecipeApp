import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipetabe',
  templateUrl: './recipetabe.component.html',
  styleUrls: ['./recipetabe.component.css'],
})
export class RecipetabeComponent implements OnInit {
  recipes: any;
  searchedRecipe: any;
  searchname: any;

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

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getAllRecipe();
  }

  getAllRecipe() {
    return this.recipeService.getAllRecipesFromDB().subscribe((data: any) => {
      this.recipes = data;
    });
  }

  deleteRecipe(id: any) {
    alert('You are deleting this item');
    return this.recipeService
      .deleteRecipeByRecipeIdFromDB(id)
      .subscribe((data: any) => {
        this.searchedRecipe = data;
        this.ngOnInit();
      });
  }

  searchRecipe() {
    return this.recipeService
      .getRecipeByNameFromDB(this.searchname)
      .subscribe((data: any) => {
        this.recipes = data;
      });
  }

  edit(recipe: any) {
    this.recipeToUpdate = recipe;
  }

  updateRecipe() {
    this.recipeService
      .updateRecipe(this.recipeToUpdate)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }
}
