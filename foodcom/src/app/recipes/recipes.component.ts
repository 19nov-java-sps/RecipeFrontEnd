import { Component, OnInit } from '@angular/core';
import {RECIPES} from '../mock-recipes';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;

   myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   firstName: new FormControl()
    // });
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
  
}





