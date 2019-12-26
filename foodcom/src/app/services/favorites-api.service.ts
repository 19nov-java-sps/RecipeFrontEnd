import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  constructor(private httpClient: HttpClient) { }
    url: string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    dburl:string = 'http://localhost:8080/RecipeBackEnd/recipes/users/';
    private token = sessionStorage.getItem("token");
    private tokenArr: string[];

    getFavoriteRecipe(theapiid: number): Observable<any>{
      // get the month and then return recipe of the month
      return this.httpClient.get(this.url + theapiid);
    }

    getFavoriteId(): Observable<any>{
      // get the month and then return recipe of the month
      this.tokenArr = this.token.split(":");

      let user_id= this.tokenArr[1];
      return this.httpClient.get(this.dburl + user_id);
    }
}
