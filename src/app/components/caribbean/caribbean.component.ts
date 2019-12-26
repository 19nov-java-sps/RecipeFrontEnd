import { Component, OnInit } from '@angular/core';
import { CaribbeanService } from 'src/app/services/caribbean.service';

@Component({
  selector: 'app-caribbean',
  templateUrl: './caribbean.component.html',
  styleUrls: ['./caribbean.component.css']
})
export class CaribbeanComponent implements OnInit {
  meals: string[]
  constructor(private caribbeanService: CaribbeanService) { }

  ngOnInit() {

    this.caribbeanService.getCaribbeanMeals()
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
