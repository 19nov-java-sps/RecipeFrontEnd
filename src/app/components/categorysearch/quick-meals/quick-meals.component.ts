import { Component, OnInit } from '@angular/core';
import { QuickMealsService } from 'src/app/services/quick-meals.service';

@Component({
  selector: 'app-quick-meals',
  templateUrl: './quick-meals.component.html',
  styleUrls: ['./quick-meals.component.css']
})
export class QuickMealsComponent implements OnInit {

  meals: string[]

  constructor(private quickieService: QuickMealsService) { }

  ngOnInit() {

    this.quickieService.getQuickieMeals()
    .subscribe(
      data =>{
        for (let i = 0; i < data.results.length; i++){
          if(data.results[i].analyzedInstructions != "undefined"){
            this.meals = data.results
          }
        }        
      }

    )
  }

}
