import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  public errormessage= '';

  // url to send requests to the backend.
  private url: string = "http://34.227.31.157:8080/RecipeBackEnd/login";
  // body to send the username and password.
  private body: string;
  /*
    http header to say what type of content the body will have
    and an observe property with value response in order to get
    back an http response to get back the authorization token that
    the backend made for us.
  */
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"}),
    observe: "response" as "body"
  };
  // auth to store the authorization header which has the token.
  private auth: string;

  /*
    This function is called when the submit button is clicked
    it then takes the username and password that was on the input
    fields and puts them on the body that will be sent.
    We then do a post request and pass in the url, body and options (headers).
    After subscribing to it we retrieve the authorization token and add it to the
    sessionStorage. Finally, we route to the user-info component.

    the user-info component is just for testing. instead of navigating to it, navigate
    to one of the components you did.
  */
  private tokenArr: string[];

  authenticate (username: string, password: string) {
    this.body = `username=${username}&password=${password}`;
    this.http.post(`${this.url}`,this.body,this.httpOptions).subscribe( response => {
      this.auth = (response["headers"].get("Authorization"));
      sessionStorage.setItem("token", this.auth);
      let token = sessionStorage.getItem("token");

      this.tokenArr = token.split(":");
      let myuserrole = this.tokenArr[2];
      // let myuserrole = "admin";

      if(myuserrole == "admin"){
        this.router.navigate(["Adminportal"]);
      } else{
        this.router.navigate(["RandRecipe"]);
      }
    },
    error =>{
      this.errormessage = "Invalid username or password";
    });
  }
}
