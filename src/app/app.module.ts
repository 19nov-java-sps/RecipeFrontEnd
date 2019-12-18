import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandrecipeComponent } from './randrecipe/randrecipe.component';
import { RandomApiService } from './services/Random-Api.service';
import { KeysPipePipe } from './pipes/keys-pipe.pipe';
import { RecipesComponent } from './recipes/recipes.component';
import { IngrfilterComponent } from './ingrfilter/ingrfilter.component';


@NgModule({
  declarations: [
    AppComponent,
    RandrecipeComponent,
    KeysPipePipe, 
    RecipesComponent,
    IngrfilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RandomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
