import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

  url:string = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private httpClient: HttpClient) { }

  getRandomRecipe(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
