import { Component, OnInit } from '@angular/core';
import { RandomApiService } from '../services/Random-Api.service';
import { RandomRecipe } from '../models/RandomRecipe';
import { RandomRecipe2 } from '../models/RandomRecipe2'

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

  constructor(private randomApi: RandomApiService) { }

  ngOnInit() {

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        this.listRandomRecipe = data;
      }
    );
    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        this.listRandomRecipe1 = data;
      }
    );

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        this.listRandomRecipe2 = data;
      }
    );

    this.randomApi.getRandomRecipe()
    .subscribe(
      data=>
      {
        this.listRandomRecipe3 = data;
      }
    );
  }

}
