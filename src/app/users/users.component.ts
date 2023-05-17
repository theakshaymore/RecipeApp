import { Component } from '@angular/core';
import { RecipeService, User } from '../recipe.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any;
  name: any;
  searchedUser: any[];

  userToUpdate = {
    userid: '',
    username: '',
    email: '',
    mobile: '',
    gender: '',
  };

  searchTerm: any;
  filteredUsers: User[];

  constructor(private recipeService: RecipeService) {
    this.searchedUser = [];
    this.filteredUsers = [];
  }

  ngOnInit(): void {
    this.getAllUserInfo();
  }

  getAllUserInfo() {
    return this.recipeService.getAllUsersInfo().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }

  deleteUser(userId: any) {
    alert('You are deleting this data');
    return this.recipeService
      .deleteUserAndRecipeByUserId(userId)
      .subscribe((data: any) => {
        this.users = data;
        console.log(data);
        this.ngOnInit();
      });
  }

  searchUser() {
    return this.recipeService.SearchUser(this.name).subscribe((data: any) => {
      this.users = data;
      console.log(data);
      // this.ngOnInit();
    });
  }

  // search(): void {
  //   this.service.searchUsers(this.searchTerm)
  //     .subscribe(users => {
  //       this.filteredUsers = users;
  //     });

  // }

  edit(user: any) {
    this.userToUpdate = user;
  }

  updateUser() {
    return this.recipeService
      .updateUser(this.userToUpdate)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }
}
