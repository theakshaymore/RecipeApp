import { Component,OnInit} from '@angular/core';
import { RecipeserviceService } from '../recipeservice.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
recipe:any;
showForm: boolean = false;
rec: any = {};
recupd: any;
noOfLikes: number = 0;
noOfDisLikes: number = 0;
likeClass = ['like-button'];
likeState: string = '';

constructor(private recser:RecipeserviceService){
}
  ngOnInit(): void {
    this.getRecipeList();
  }

  incrementLike() {
    switch (this.likeState) {
      case '':
        this.likeState = "liked"
        this.noOfLikes = this.noOfLikes + 1;
        break;
      case 'liked':
        this.likeState = ""
        this.noOfLikes = this.noOfLikes - 1;
        break;
      case 'disliked':
        this.likeState = "liked"
        this.noOfLikes = this.noOfLikes + 1;
        this.noOfDisLikes = this.noOfDisLikes - 1;
        break;
    }
    // if(this.likeState == "disliked")
    // this.likeClass.push('liked');
  }

  incrementDisLike() {
    console.log(this.likeState);
    switch (this.likeState) {
      case '':
        this.likeState = "disliked"
        this.noOfDisLikes = this.noOfDisLikes + 1;
        break;
      case 'liked':
        this.likeState = "disliked"
        this.noOfLikes = this.noOfLikes - 1;
        this.noOfDisLikes = this.noOfDisLikes + 1;
        break;
      case 'disliked':
        this.likeState = ""
        this.noOfDisLikes = this.noOfDisLikes - 1;
        break;
    }
    // this.likeState = 'dislikesd';
    // this.noOfDisLikes = this.noOfDisLikes + 1;
  }
  getRecipeList(){
    return this.recser.getRecipeList().subscribe((data:any)=>{
      this.recipe=data;
  })
  }
  delbyid(recipeid:any){
    return this.recser.deleteRecipe(recipeid).subscribe((data:any)=>{
      console.log(data);
      this.ngOnInit();
    })
  }

  editRecipe(Recipe: any) {
    this.recupd = Recipe;
  }
  
  updateRecipe() {
    return this.recser.updateRecipe(this.recupd).subscribe((data: any) => {
      console.log(data);
      this.recupd = null;
      this.ngOnInit();
    });
  }
  


}