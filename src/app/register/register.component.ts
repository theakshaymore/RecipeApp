import { Component, OnInit, ElementRef } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: any = '';
  email: any = '';
  mobile: any = '';
  gender: any = '';
  password: any = '';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private elementRef: ElementRef,
    private router: Router
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

  save() {
    let bodyData = {
      username: this.username,
      email: this.email,
      password: this.password,
      mobile: this.mobile,
      gender: this.gender,
    };
    this.http
      .post('/app/user/list', bodyData, { responseType: 'text' })
      .subscribe((resultData: any) => {
        // console.log(resultData);
        this.showToastMessage();
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      });
  }
}
