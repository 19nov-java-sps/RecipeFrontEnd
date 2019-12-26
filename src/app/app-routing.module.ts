import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RandrecipeComponent } from './components/randrecipe/randrecipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
<<<<<<< HEAD
import { RecipesComponent } from 'foodcom/src/app/recipes/recipes.component';
=======
import { AdminportalComponent } from './components/adminportal/adminportal.component';
>>>>>>> 700e112eef6c02c85612ce57e5955b3385f377b6

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "RandRecipe", component: RandrecipeComponent},
  { path: "Favorites", component: FavoritesComponent},
<<<<<<< HEAD
  { path: "Filter", component: RecipesComponent}
=======
  { path: "Adminportal", component: AdminportalComponent}
>>>>>>> 700e112eef6c02c85612ce57e5955b3385f377b6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
