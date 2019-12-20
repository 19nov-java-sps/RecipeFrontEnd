import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

  url:string = 'https://www.themealdb.com/api/json/v1/1/random.php';
  dburl:string = 'http://localhost:8080/RecipeBackEnd/recipes-of-month/';

  constructor(private httpClient: HttpClient) { }

  getRandomRecipe(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  getMonthRecipe(): Observable<any>{
    // get the month and then return recipe of the month
    let d = new Date();
    let month = d.getMonth() + 1;
    return this.httpClient.get(this.dburl + month);
  }

}
