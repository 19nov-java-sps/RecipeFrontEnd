import { Component, OnInit } from '@angular/core';
import { LowCalorieService } from 'src/app/services/low-calorie.service';

@Component({
  selector: 'app-low-calorie',
  templateUrl: './low-calorie.component.html',
  styleUrls: ['./low-calorie.component.css']
})
export class LowCalorieComponent implements OnInit {
  meals:string[]
  constructor(private lowCalorieService: LowCalorieService) { }

  ngOnInit() {

    this.lowCalorieService.getLowCalorieMeals()
    .subscribe(
      data => {
        for (let i = 0; i < data.results.length; i++){
          if(data.results[i].analyzedInstructions != "undefined"){
            console.log(data.results[i].analyzedInstructions["0"])
            this.meals = data.results
         
          }
        }
      })    
  }

}