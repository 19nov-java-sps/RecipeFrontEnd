import { Component, OnInit } from '@angular/core';
import { PescatarianService } from 'src/app/services/pescatarian.service';



@Component({
  selector: 'app-pescatarian',
  templateUrl: './pescatarian.component.html',
  styleUrls: ['./pescatarian.component.css']
})
export class PescatarianComponent implements OnInit {
  meals: string[]
  constructor(private fishyService: PescatarianService) { }

  ngOnInit() {

    this.fishyService.getFishyMeals()
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
