import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../mock-recipes';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  [x: string]: any;

  recipes = RECIPES;

   myForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService ) { }

  ngOnInit() {
  
    this.myForm = this.fb.group({
      userrecipe: this.fb.array([])
    });
  }

  onChange(recipe: string, isChecked: boolean) {

    const recipeFormArray = <FormArray>this.myForm.controls.userrecipe;
    if (isChecked) {
      recipeFormArray.push(new FormControl(recipe));
    }else{
      let index = recipeFormArray.controls.findIndex(x => x.value ==recipe)
      recipeFormArray.removeAt(index);
    }
  }

  // recipeFormArrayJson:JsonPipe = (this.recipeFormArray | JSON);

  save(): void {
    
    this.recipeService.updateRecipe(this.recipeFormArray)
      .subscribe(() => this.goBack());
      
  }

 
}





