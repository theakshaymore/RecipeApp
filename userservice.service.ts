import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  isUserLoggedIn: boolean;

  constructor(private httpclient:HttpClient) 
  { 
this.isUserLoggedIn=false;
  }
  setIsUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
 
  getUserList(){
    return this.httpclient.get("/app/user/list");
  }
  deleteUser(userid:any){
    return this.httpclient.delete("/app/user/list/"+userid);
  }
}
