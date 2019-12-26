import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaribbeanService {

  caribbeanUrl:string = "https://api.spoonacular.com/recipes/complexSearch?cuisine=Caribbean&instructionsRequired=true&addRecipeInformation=true&number=5&fillIngredients=true&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getCaribbeanMeals(): Observable<any> {
    return this.http.get(this.caribbeanUrl);
  }

}