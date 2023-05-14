import { Component,OnInit } from '@angular/core';
import { RecipeserviceService } from '../recipeservice.service';

@Component({
  selector: 'app-sharerecipe',
  templateUrl: './sharerecipe.component.html',
  styleUrls: ['./sharerecipe.component.css']
})
export class SharerecipeComponent implements OnInit{
  recipe:any;
showForm: boolean = false;
rec: any = {};
recupd: any;


  constructor(private recser:RecipeserviceService){
  }
  ngOnInit(): void {

  }
  addRecipe(){
    this.showForm=true;
  }
  
  
  addNewRecipe() {
    return this.recser.addRecipe(this.rec).subscribe((data: any) => {
      console.log(data);
      this.rec = {};
      this.ngOnInit();
    });
  }
  
}
