import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LowCalorieService {

  lowCalorieUrl:string ="https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeInformation=true&number=5&fillIngredients=true&minCalories=400&maxCalories=500&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getLowCalorieMeals(): Observable<any> {
    return this.http.get(this.lowCalorieUrl);
  }

}
