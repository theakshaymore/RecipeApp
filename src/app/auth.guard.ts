import { CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipeserviceService } from './recipeservice.service';
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn!: Observable<boolean>;
  constructor(private recser:RecipeserviceService){

  }
  canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  
  return this.recser.getIsUserLoggedIn();
  }
}