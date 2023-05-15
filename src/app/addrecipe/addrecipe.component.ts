import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css'],
})
export class AddrecipeComponent implements OnInit {
  recipe: any;
  showForm: boolean = false;
  rec: any = {};
  recupd: any;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  addRecipe() {
    this.showForm = true;
  }

  addNewRecipe() {
    return this.recipeService.addRecipe(this.rec).subscribe((data: any) => {
      console.log(data);
      this.rec = {};
      this.ngOnInit();
    });
  }
}
