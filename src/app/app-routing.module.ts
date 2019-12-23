import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RandrecipeComponent } from './components/randrecipe/randrecipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RecipesComponent } from 'foodcom/src/app/recipes/recipes.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "RandRecipe", component: RandrecipeComponent},
  { path: "Favorites", component: FavoritesComponent},
  { path: "Filter", component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
