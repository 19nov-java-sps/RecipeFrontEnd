import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickMealsService {

  quickieUrl:string = "https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeInformation=true&number=25&fillIngredients=true&maxReadyTime=5&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getQuickieMeals(): Observable<any> {
    return this.http.get(this.quickieUrl);
  }
}
