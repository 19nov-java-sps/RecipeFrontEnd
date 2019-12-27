import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CreateUser } from 'src/app/models/CreateUser';
import { ListUsers } from 'src/app/models/ListUsers';
import { Updateuser } from 'src/app/models/Updateuser';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  private token = sessionStorage.getItem("token");
  displayMessage: string;
  displayMessageUpdate: string;
  displayMessageDelete: string;

  constructor(private router: Router, private adminservice: AdminService) { }

  private tokenArr: string[];

  private listofUser: ListUsers[];

  private listofupdateuser: Updateuser[];

  ngOnInit() {

    if (sessionStorage.getItem("token")) {
      console.log("token", this.token);
    } else {
      // if there is no token in the sessionStorage then navigate to the login view.
      this.router.navigate(["login"]);
      console.log("no token");
    }

    // get the month and then return recipe of the month
    this.tokenArr = this.token.split(":");

    let myuserrole= this.tokenArr[2];

    if (myuserrole == "admin") {
      console.log("token", this.token);
    } else {
      // if there is no token in the sessionStorage then navigate to the login view.
      this.router.navigate(["login"]);
      console.log("no token");
    }

    this.adminservice.showUser()
    .subscribe(
      data=>{
        this.listofUser = data;
      }
    )

    this.adminservice.showUser()
    .subscribe(
      data=>{
        this.listofupdateuser = data;
      }
    )
  }

  updatingUser(userid: number, username: string, password: string, userrole: string){
    this.adminservice.updateUser(userid, username, password, userrole);
    this.displayMessageUpdate = "User has been updated!";
  }

  removeUser(userid: number){
    console.log(userid);
    this.adminservice.deleteUser(userid);
    this.displayMessageDelete = "User has been deleted!";
  }

  submitUser(username: string, password: string, userrole: string) {
    if(username == ""){
      this.displayMessage = "That is an invalid username!";
    }
    else if(password == ""){
      this.displayMessage = "That is an invalid password!";
    }
    else{
      this.displayMessage = "The account is created!";
      this.adminservice.createUser(username, password, userrole);
    }
    // this.adminservice.createUser(username, password, userrole);
  }
  // used to clear the session storage.
  clear() {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
