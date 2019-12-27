import { Component, OnInit } from '@angular/core';
import { VegetarianService } from 'src/app/services/vegetarian.service';

@Component({
  selector: 'app-vegetarian',
  templateUrl: './vegetarian.component.html',
  styleUrls: ['./vegetarian.component.css']
})
export class VegetarianComponent implements OnInit {
  meals: string[]
  constructor(private veggieService: VegetarianService) { }


  ngOnInit() {

    this.veggieService.getVeggieMeals()
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
