import { Component, OnInit } from '@angular/core';
import { RandomApiService } from '../services/Random-Api.service';
import { RandomRecipe } from '../models/RandomRecipe';
import { RandomRecipe2 } from '../models/RandomRecipe2';
import { Month } from '../models/Month';

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

  constructor(private randomApi: RandomApiService) { }

  ngOnInit() {

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

}
