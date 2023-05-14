import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: any;

  constructor(private recipeService: RecipeService, private router: Router) {
    //
  }
  ngOnInit(): void {
    this.getAllRecipesFromService();
  }

  getAllRecipesFromService() {
    return this.recipeService.getAllRecipesFromDB().subscribe((data: any) => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }

  viewRecipeDetails(recipeid: any) {
    this.router.navigate(['/recipedetails'], { state: { data: recipeid } });
    // this.router.navigate(['/recipedetails'], { state: recipeid });
  }
}
