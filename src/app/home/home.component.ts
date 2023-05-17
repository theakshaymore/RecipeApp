import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: any;
  userId: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //
  }
  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.userId = this.route.snapshot.paramMap.get('data');
    //   console.log('ID=' + this.userId);
    // });
    // this.getAllRecipesFromService();

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
  }
}
