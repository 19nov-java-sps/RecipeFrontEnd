import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;

  //recipe = "My recipe";

  constructor() { }

  ngOnInit() {
  }

}
