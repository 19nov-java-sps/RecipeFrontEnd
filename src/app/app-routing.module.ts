import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RandrecipeComponent } from './components/randrecipe/randrecipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { CategorysearchComponent } from './components/categorysearch/categorysearch.component';
import { VegetarianComponent } from './components/categorysearch/vegetarian/vegetarian.component';
import { PescatarianComponent } from './components/categorysearch/pescatarian/pescatarian.component';
import { QuickMealsComponent } from './components/categorysearch/quick-meals/quick-meals.component';
import { LactoseComponent } from './components/categorysearch/lactose/lactose.component';
import { CaribbeanComponent } from './components/categorysearch/caribbean/caribbean.component';
import { SouthernComponent } from './components/categorysearch/southern/southern.component';
import { KoreanComponent } from './components/categorysearch/korean/korean.component';
import { ByFoodGroupComponent } from './components/categorysearch/by-food-group/by-food-group.component';
import { LowCalorieComponent } from './components/categorysearch/low-calorie/low-calorie.component';
import { RecipesSearchComponent } from './components/recipes-search/recipes-search.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "RandRecipe", component: RandrecipeComponent},
  { path: "Favorites", component: FavoritesComponent},
  { path: "Adminportal", component: AdminportalComponent},
  { path: "CategorySearch", component: CategorysearchComponent },
  { path: "caribbean", component: CaribbeanComponent},
  { path: "korean", component: KoreanComponent},
  { path: "southern", component: SouthernComponent},
  { path: "lactose", component: LactoseComponent},
  { path: "pescatarian", component: PescatarianComponent},
  { path: "vegetarian", component: VegetarianComponent},
  { path: "quick-meals", component: QuickMealsComponent},
  { path: "by-food-group", component: ByFoodGroupComponent},
  { path: "low-calorie", component: LowCalorieComponent},
  { path: "Search-recipes", component: RecipesSearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
