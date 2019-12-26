import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CaribbeanComponent } from './components/caribbean/caribbean.component';
import { KoreanComponent } from './components/korean/korean.component';
import { SouthernComponent } from './components/southern/southern.component';
import { LactoseComponent } from './components/lactose/lactose.component';
import { PescatarianComponent } from './components/pescatarian/pescatarian.component';
import { VegetarianComponent } from './components/vegetarian/vegetarian.component';
import { QuickMealsComponent } from './components/quick-meals/quick-meals.component';
import { ByFoodGroupComponent } from './components/by-food-group/by-food-group.component';
import { LowCalorieComponent } from './components/low-calorie/low-calorie.component';


const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "nav", component: NavComponent},
  { path: "caribbean", component: CaribbeanComponent},
  { path: "korean", component: KoreanComponent},
  { path: "southern", component: SouthernComponent},
  { path: "lactose", component: LactoseComponent},
  { path: "pescatarian", component: PescatarianComponent},
  { path: "vegetarian", component: VegetarianComponent},
  { path: "quick-meals", component: QuickMealsComponent},
  { path: "by-food-group", component: ByFoodGroupComponent},
  { path: "low-calorie", component: LowCalorieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }