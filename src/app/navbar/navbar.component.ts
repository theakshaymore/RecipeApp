import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  login: boolean = true;
  logout: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {
    //
  }

  ngOnInit(): void {
    this.updateLoginStatus();

    // Subscribe to the loginStatusChanged event
    this.recipeService.loginStatusChanged.subscribe(() => {
      this.updateLoginStatus();
    });
  }

  updateLoginStatus(): void {
    this.login = !this.recipeService.getIsUserLoggedIn();
    this.logout = this.recipeService.getIsUserLoggedIn();
  }

  logoutUser() {
    this.recipeService.isUserLoggedIn = false;
    this.recipeService.notifyLoginStatusChange();
    this.router.navigate(['']);
  }
}
