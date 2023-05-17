import { Component, ElementRef, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css'],
})
export class AddrecipeComponent implements OnInit {
  recipe: any;
  rec: any = {};
  recupd: any;

  constructor(
    private recipeService: RecipeService,
    private elementRef: ElementRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.rec.userid = this.recipeService.getUserId();
  }

  private showToastMessage() {
    const toastElement: HTMLElement =
      this.elementRef.nativeElement.querySelector('.toast');
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 5000);
  }

  addNewRecipe() {
    return this.recipeService.addRecipe(this.rec).subscribe((data: any) => {
      console.log(data);
      this.rec = {};
      this.ngOnInit();
      this.showToastMessage();
    });
  }
}
