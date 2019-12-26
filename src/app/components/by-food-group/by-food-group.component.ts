import { Component, OnInit } from '@angular/core';
import { ByFoodGroupService } from 'src/app/services/by-food-group.service';

@Component({
  selector: 'app-by-food-group',
  templateUrl: './by-food-group.component.html',
  styleUrls: ['./by-food-group.component.css'],
  providers: [ByFoodGroupService]
})
export class ByFoodGroupComponent implements OnInit {
  listOfRecipesForChicken: string []
  listOfRecipesForBeef: string []
  listOfRecipesForFish: string []
  listOfRecipesForRice: string []
  listOfRecipesForPasta: string []
  listOfRecipesForNuts: string []
  listOfRecipesForSalad: string []
  samplelist: object[]
  listOfFoodGroups: string[] = ["CHICKEN", "BEEF", "FISH", "RICE", "PASTA", "NUTS", "SALAD" ]
  
  buttonPressed: boolean = false
  itemChosen: string = ""
  

  constructor(private byFoodGroup: ByFoodGroupService) { }

  ngOnInit() {


     //chicken service//
    this.byFoodGroup.getFoodByFoodGroup("CHICKEN").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForChicken = meals.results
       
        }
      }
    })    

    //beef service//
    this.byFoodGroup.getFoodByFoodGroup("BEEF").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForBeef = meals.results
       
        }
      }
    })    

    //fish service//
    this.byFoodGroup.getFoodByFoodGroup("FISH").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForFish = meals.results
       
        }
      }
    }) 
    
     //rice service//
    this.byFoodGroup.getFoodByFoodGroup("RICE").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForRice = meals.results
       
        }
      }
    })  
    
     //pasta service//
     this.byFoodGroup.getFoodByFoodGroup("PASTA").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForPasta = meals.results
       
        }
      }
    })  
    
     //nuts service//
     this.byFoodGroup.getFoodByFoodGroup("NUTS").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForNuts = meals.results
       
        }
      }
    })   
    
     //salad service//
     this.byFoodGroup.getFoodByFoodGroup("SALAD").subscribe(
      meals => {
      for (let i = 0; i < meals.results.length; i++){
        if(meals.results[i].analyzedInstructions != "undefined"){
          console.log(meals.results[i].analyzedInstructions["0"])
          this.listOfRecipesForSalad = meals.results
       
        }
      }
    })    


  
  }

    
  sendData(string : string) {
    this.buttonPressed = !this.buttonPressed
    this.itemChosen = string
 
  }

}
