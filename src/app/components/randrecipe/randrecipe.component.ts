import { Component, OnInit } from '@angular/core';
import { RandomApiService } from 'src/app/services/Random-Api.service';
import { RandomRecipe } from 'src/app/models/RandomRecipe';
import { Month } from 'src/app/models/Month';
import { Router } from '@angular/router';

@Component({
  selector: 'app-randrecipe',
  templateUrl: './randrecipe.component.html',
  styleUrls: ['./randrecipe.component.css']
})
export class RandrecipeComponent implements OnInit {

  listRandomRecipe: RandomRecipe[];

  listRandomRecipe1: RandomRecipe[];
  listRandomRecipe2: RandomRecipe[];
  listRandomRecipe3: RandomRecipe[];

  listMonthRecipe: Month[];

  private token = sessionStorage.getItem("token");

  constructor(private randomApi: RandomApiService, private router: Router) { }

  ngOnInit() {

    if (sessionStorage.getItem("token")) {
      console.log("token", this.token);
    } else {
      // if there is no token in the sessionStorage then navigate to the login view.
      this.router.navigate(["login"]);
      console.log("no token");
    }

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        for(let i=0; i<data.meals.length; i++){
          this.listRandomRecipe = data.meals;
        }
      }
    );

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        for(let i=0; i<data.meals.length; i++){
          this.listRandomRecipe1 = data.meals;
        }
      }
    );

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        for(let i=0; i<data.meals.length; i++){
          this.listRandomRecipe2 = data.meals;
        }
      }
    );

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        for(let i=0; i<data.meals.length; i++){
          this.listRandomRecipe3 = data.meals;
        }
      }
    );

    this.randomApi.getMonthRecipe()
    .subscribe(
      data=>
      {
        this.listMonthRecipe = data;
      }
    );

  }
  // used to clear the session storage.
  clear() {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }

}
