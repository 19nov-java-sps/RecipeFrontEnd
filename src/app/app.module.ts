import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { RandrecipeComponent } from './components/randrecipe/randrecipe.component';
import { NavComponent } from './components/nav/nav.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { CategorysearchComponent } from './components/categorysearch/categorysearch.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VegetarianComponent } from './components/categorysearch/vegetarian/vegetarian.component';
import { VegetarianService } from './services/vegetarian.service';
import { PescatarianComponent } from './components/categorysearch/pescatarian/pescatarian.component';
import { PescatarianService } from './services/pescatarian.service';
import { QuickMealsComponent } from './components/categorysearch/quick-meals/quick-meals.component';
import { QuickMealsService } from './services/quick-meals.service';
import { LactoseComponent } from './components/categorysearch/lactose/lactose.component';
import { LactoseService } from './services/lactose.service';
import { CaribbeanComponent } from './components/categorysearch/caribbean/caribbean.component';
import { CaribbeanService } from './services/caribbean.service';
import { SouthernComponent } from './components/categorysearch/southern/southern.component';
import { SouthernService } from './services/southern.service';
import { KoreanComponent } from './components/categorysearch/korean/korean.component';
import { KoreanService } from './services/korean.service';
import { ByFoodGroupComponent } from './components/categorysearch/by-food-group/by-food-group.component';
import { ByFoodGroupService } from './services/by-food-group.service';
import { LowCalorieComponent } from './components/categorysearch/low-calorie/low-calorie.component';
import { LowCalorieService } from './services/low-calorie.service';

import { RecipesSearchComponent } from './components/recipes-search/recipes-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RandrecipeComponent,
    NavComponent,
    FavoritesComponent,
    AdminportalComponent,
    CategorysearchComponent,
    VegetarianComponent,
    PescatarianComponent,
    QuickMealsComponent,
    LactoseComponent,
    CaribbeanComponent,
    SouthernComponent,
    KoreanComponent,
    ByFoodGroupComponent,
    LowCalorieComponent,
    RecipesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
