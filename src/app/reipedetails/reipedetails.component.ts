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

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipe = history.state.data;
      console.log(this.recipe);
    });
  }
}
