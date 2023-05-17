import { Component, OnInit, ElementRef } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

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
        if (data && data.email === null && data.password === null) {
          console.log('Invalid email and password');
          this.showToastMessage();
        } else if (
          data &&
          data.email === formdata.email &&
          data.password === formdata.password
        ) {
          this.recipeService.setUserId(data.userid);
          this.recipeService.setIsUserLoggedIn();
          if (formdata.email == 'a' && formdata.password == 'a') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['recipelist']);
          }
        } else {
          console.log('Invalid email and password');
          this.showToastMessage();
        }
      });
  }
}
