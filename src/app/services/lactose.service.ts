import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LactoseService {

  lactoseUrl:string = "https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=5&intolerances=dairy&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getMilkyMeals(): Observable<any> {
    return this.http.get(this.lactoseUrl);
  }
}