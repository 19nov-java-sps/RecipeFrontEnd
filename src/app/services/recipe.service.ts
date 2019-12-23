import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class RecipeService {

  private recipesUrl='http://localhost:8080/RecipeBackEnd/recipes';
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
    ) { }
 
     
  getRecipes(): Observable<Recipe[]> {
     return this.http.get<Recipe[]>(this.recipesUrl);
  }


  getRecipe(id: number): Observable<Recipe> {
    const url = '${this.heroesUrl}/${id}';
    return this.http.get<Recipe>(url);
    
  }
  
  updateRecipe (recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions
    );
  }

  addRecipe (recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions
    );
  }

  deleteRecipe (recipe: Recipe | number): Observable<Recipe> {
   // const id = typeof recipe === 'number' ? recipe : recipe.id;
    const url = '${this.recipesUrl}/${id}';

    return this.http.delete<Recipe>(url, this.httpOptions);
  }
 
  
}
