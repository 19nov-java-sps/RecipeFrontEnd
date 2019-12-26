import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VegetarianComponent } from './components/vegetarian/vegetarian.component';
import { VegetarianService } from './services/vegetarian.service';
import { PescatarianComponent } from './components/pescatarian/pescatarian.component';
import { PescatarianService } from './services/pescatarian.service';
import { QuickMealsComponent } from './components/quick-meals/quick-meals.component';
import { QuickMealsService } from './services/quick-meals.service';
import { LactoseComponent } from './components/lactose/lactose.component';
import { LactoseService } from './services/lactose.service';
import { CaribbeanComponent } from './components/caribbean/caribbean.component';
import { CaribbeanService } from './services/caribbean.service';
import { SouthernComponent } from './components/southern/southern.component';
import { SouthernService } from './services/southern.service';
import { KoreanComponent } from './components/korean/korean.component';
import { KoreanService } from './services/korean.service';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ByFoodGroupComponent } from './components/by-food-group/by-food-group.component';
import { ByFoodGroupService } from './services/by-food-group.service';
import { LowCalorieComponent } from './components/low-calorie/low-calorie.component';
import { LowCalorieService } from './services/low-calorie.service';



@NgModule({
  declarations: [
    AppComponent,
    VegetarianComponent,
    PescatarianComponent,
    QuickMealsComponent,
    LactoseComponent,
    CaribbeanComponent,
    SouthernComponent,
    KoreanComponent,
    NavComponent,
    ByFoodGroupComponent,
    LowCalorieComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VegetarianService, PescatarianService, QuickMealsService, LactoseService, SouthernService, CaribbeanService, KoreanService, ByFoodGroupService, LowCalorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
