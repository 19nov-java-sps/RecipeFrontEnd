import { Component, OnInit } from "@angular/core";
import { RecipeByNameSearchService } from "src/app/services/recipe-by-name-search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes-search",
  templateUrl: "./recipes-search.component.html",
  styleUrls: ["./recipes-search.component.css"]
})
export class RecipesSearchComponent implements OnInit {
  constructor(
    private _RecipeByNameSearchService_: RecipeByNameSearchService,
    private router: Router
  ) {}

  private token = sessionStorage.getItem("token");
  tokenID;
  ngOnInit() {
    if (sessionStorage.getItem("token")) {
      console.log("token", this.token);
      this.tokenID = this.token.split(":")[1];
      console.log(this.tokenID);
    } else {
      // if there is no token in the sessionStorage then navigate to the login view.
      this.router.navigate(["login"]);
      console.log("no token");
    }
  }

  search;

  Recipes = [];

  selectedRecipes = [];

  searchRecipe(string) {
    if (string) {
      console.log(string);
      this.Recipes = [];
      this._RecipeByNameSearchService_
        .getrecipebyname(string)
        .subscribe(res => {
          console.log(res);
          if (res.meals.length > 0) {
            this.Recipes = res.meals;
            return;
          } else {
            this.Recipes = [];
            return;
          }
        });
    } else {
      return;
    }
  }

  selectRecipe(data) {
    console.log(data);
    for (var i = 0; i < this.selectedRecipes.length; i++) {
      if (data.idMeal == this.selectedRecipes[i].apiId) {
        console.log("pahla hi hai");
        this.selectedRecipes.splice(i,1);
        console.log(this.selectedRecipes);
        return;
      }
    }
    this.selectedRecipes.push({
      id: this.selectedRecipes.length+1,
      apiId: data.idMeal,
      user_id: this.tokenID
    });
    console.log(this.selectedRecipes);
  }

  saveSelected(){
    console.log(this.selectedRecipes);
    this._RecipeByNameSearchService_.saverecipes(this.selectedRecipes).subscribe(res => {
      if(res){
        alert("Suucessfully saved");
        this.selectedRecipes = [];
        this.Recipes = [];
        this.search = "";
        return;
      }else{
        alert("Some Error Happen");
        this.Recipes = [];
        this.selectedRecipes = [];

        this.search = "";
        return;
      }
    } , error => {
      alert("Some Error Happen");
      this.Recipes = [];
      this.selectedRecipes = [];

      this.search = "";
      return;
    })
  }
}
