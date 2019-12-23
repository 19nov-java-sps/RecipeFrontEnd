import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../mock-recipes';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Recipe } from '../recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;
  
  
  //recipes: Recipe[];

   myForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   firstName: new FormControl()
    // });
    this.myForm = this.fb.group({
      userrecipe: this.fb.array([])
    });
    this.getRecipes();
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



  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.recipeService.addRecipe({ title } as Recipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
      });
  }

  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter(h => h !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe();
  }

}

  






