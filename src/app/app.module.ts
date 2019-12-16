import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandrecipeComponent } from './randrecipe/randrecipe.component';
import { RandomApiService } from './services/Random-Api.service';
import { KeysPipePipe } from './pipes/keys-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RandrecipeComponent,
    KeysPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RandomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
