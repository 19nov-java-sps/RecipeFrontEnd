import { Component, OnInit } from '@angular/core';
import { SouthernService } from 'src/app/services/southern.service';

@Component({
  selector: 'app-southern',
  templateUrl: './southern.component.html',
  styleUrls: ['./southern.component.css']
})
export class SouthernComponent implements OnInit {
  meals: string[]
  constructor(private southernService: SouthernService) { }

  ngOnInit() {

    this.southernService.getSouthernMeals()
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
