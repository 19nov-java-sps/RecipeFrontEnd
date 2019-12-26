import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KoreanService {

  koreanUrl:string = "https://api.spoonacular.com/recipes/complexSearch?cuisine=Korean&instructionsRequired=true&addRecipeInformation=true&number=5&fillIngredients=true&apiKey=a477d7e1d9174829850147efdd2cad80";

  constructor(private http: HttpClient) { }

  getKoreanMeals(): Observable<any> {
    return this.http.get(this.koreanUrl);
  }

}


