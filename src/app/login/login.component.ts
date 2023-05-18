import { Component, OnInit, ElementRef } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any;
  pasword: any;
  userId: any;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {
    //
  }

  private showToastMessage() {
    const toastElement: HTMLElement =
      this.elementRef.nativeElement.querySelector('.toast');
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 5000);
  }

  loginUser(formdata: any) {
    this.recipeService
      .getUserByEmailAndPasswordFromDB(formdata.email, formdata.password)
      .subscribe((data: any) => {
        console.log(data);
        if (data == null) {
          console.log('Invalid email and password');
          this.showToastMessage();
        } else if (data) {
          console.log('success');
          this.recipeService.setUserId(data.userid);
          this.recipeService.setIsUserLoggedIn();
          if (data.privilege == 1) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['recipelist']);
          }
        }
      });
  }
}
