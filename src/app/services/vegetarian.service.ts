import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VegetarianService {

  veggieUrl:string = "https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=5&instructionsRequired=false&fillIngredients=true&addRecipeInformation=true&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getVeggieMeals(): Observable<any> {
    return this.http.get(this.veggieUrl);
  }

}