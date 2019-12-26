import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeByNameSearchService {

  url:string = 'https://www.themealdb.com/api/json/v1/1/filter.php';

  constructor(private httpClient: HttpClient) { }

  getrecipebyname(str): Observable<any>{
    return this.httpClient.get(this.url+'?i='+str);
  }

  saverecipes(data){
    return this.httpClient.post("http://recipebackend-env.3fcysiv2nc.us-east-2.elasticbeanstalk.com/recipes" , data);
  }

}
