import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private displayError: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  reqLogin(username: string, password: string) {
    this.loginService.authenticate(username, password);
    this.displayError = this.loginService.errormessage;
    
  }

}
