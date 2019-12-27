import { Component, OnInit } from '@angular/core';
import { FavoritesApiService } from 'src/app/services/favorites-api.service';
import { FavModel } from 'src/app/models/FavModel';
import { FavModel1 } from 'src/app/models/FavModel1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [FavoritesApiService]
})
export class FavoritesComponent implements OnInit {

  constructor(private myfavorite: FavoritesApiService, private router: Router) { }
  private token = sessionStorage.getItem("token");
  listFavoriteRecipes: FavModel[];
  listFavoriteRecipes1: FavModel1[];

  ngOnInit() {

    if (sessionStorage.getItem("token")) {
      console.log("token", this.token);
    } else {
      // if there is no token in the sessionStorage then navigate to the login view.
      this.router.navigate(["login"]);
      console.log("no token");
    }

    this.myfavorite.getFavoriteId()
    .subscribe(
      data=>
      {
        this.listFavoriteRecipes = data;
      }
    );
  }

  sendData(theapiid: number){
    this.myfavorite.getFavoriteRecipe(theapiid)
    .subscribe(
      data=>{
        for(let i=0; i<data.meals.length; i++){
          this.listFavoriteRecipes1 = data.meals;
        }
      }
    )
  }

  // used to clear the session storage.
  clear() {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
