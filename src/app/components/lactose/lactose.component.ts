import { Component, OnInit } from '@angular/core';
import { LactoseService } from 'src/app/services/lactose.service';

@Component({
  selector: 'app-lactose',
  templateUrl: './lactose.component.html',
  styleUrls: ['./lactose.component.css']
})
export class LactoseComponent implements OnInit {
  meals: string[]
  constructor(private milkService: LactoseService) { }

  ngOnInit() {

    this.milkService.getMilkyMeals()
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
