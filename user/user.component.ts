import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any;
  constructor(private usrser: UserserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getUserList();

  }

  getUserList() {
    return this.usrser.getUserList().subscribe((data: any) => {
      this.user = data;
    });
  }

  delbyid(userid: any) {
    return this.usrser.deleteUser(userid).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
