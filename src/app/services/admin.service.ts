import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  // url to send requests to the backend.
  private url: string = "http://localhost:8080/RecipeBackEnd/users";
  // body to send the username and password.
  private body: string;
  // delete users
  private deleteurl: string = "http://localhost:8080/RecipeBackEnd/users/";

  private editurl: string = "http://localhost:8080/RecipeBackEnd/users/edit/";

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
    observe: "response" as "body"
  };

  errormessage: string;
  successMessage: string;

  updateUser(userid: number, username: string, password: string, userrole: string){
    this.body = JSON.stringify({userid:userid, username:username, password:password, userrole:userrole});
    this.httpClient.put(`${this.editurl}`,this.body,this.httpOptions).subscribe();
  }

  deleteUser(userid: number){
    this.httpClient.delete(this.deleteurl +userid, this.httpOptions).subscribe();
  }

  createUser (username: string, password: string, userrole: string) {
    this.body = JSON.stringify({username:username, password:password, userrole:userrole});
    this.httpClient.post(`${this.url}`,this.body,this.httpOptions).subscribe( response => {
      this.successMessage = "Account has been created!";
    },
    error =>{
      this.errormessage = "Invalid input";
    });
  }

  showUser(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
