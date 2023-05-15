import { Component, OnInit, ElementRef } from '@angular/core';
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
  comments: any;
  userId: any = 2;
  userName: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = history.state.data;
      this.recipe = this.getRecipeByIdFromService(this.recipeId);
      this.getCommentsByRecipeIdFromService();
      this.userName = this.getUserNameByRecipeIdFromService(this.recipeId);
    });
    // this.recipeId = this.route.snapshot.firstChild?.data['state'];
  }

  private showToastMessage() {
    const toastElement: HTMLElement =
      this.elementRef.nativeElement.querySelector('.toast');
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 5000);
  }

  //FOR RECIPE
  getRecipeByIdFromService(recipeId: any) {
    return this.recipeService
      .getRecipeByIdFromDB(recipeId)
      .subscribe((data: any) => {
        this.recipe = data;
      });
  }

  //FOR COMMENT
  getCommentsByRecipeIdFromService() {
    this.comments = this.recipeService
      .getCommentsByRecipeIdFromDB(this.recipeId)
      .subscribe((data: any) => {
        this.comments = data;
      });
  }

  getUserNameByRecipeIdFromService(recipeId: any) {
    this.recipeService
      .getUserNameByRecipeIdFromDB(recipeId)
      .subscribe((data: any) => {
        this.userName = data[data.length - 1];
        console.log(this.userName);
      });
  }

  addComment(values: any) {
    values.recipeid = this.recipeId;
    values.userid = this.userId;
    console.log(values);
    this.recipeService.addCommentInDB(values).subscribe((data: any) => {
      this.comments.push(data);
      this.ngOnInit();
      this.showToastMessage();
    });
  }
}
