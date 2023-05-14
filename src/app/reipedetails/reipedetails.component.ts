import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reipedetails',
  templateUrl: './reipedetails.component.html',
  styleUrls: ['./reipedetails.component.css'],
})
export class ReipedetailsComponent implements OnInit {
  recipe: any;
  recipeId: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute

    
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = history.state.data;
      console.log(this.recipeId);
 
    });
    // this.recipeId = this.route.snapshot.firstChild?.data['state'];
    console.log(this.recipeId); // { myData: 'Hello World' }

    this.recipe = this.getRecipeByIdFromService(this.recipeId);
  }

  getRecipeByIdFromService(recipeId: any) {
    return this.recipeService
      .getRecipeByIdFromDB(recipeId)
      .subscribe((data: any) => {
        this.recipe = data;
      });
  }

}
