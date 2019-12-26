import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ByFoodGroupService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeInformation=true&number=5&fillIngredients=true&apiKey=a477d7e1d9174829850147efdd2cad80&includeIngredients=';

  getFoodByFoodGroup(food : string) : Observable<any> {
    return this.http.get(`${this.url}+${food}`)
  }


}
