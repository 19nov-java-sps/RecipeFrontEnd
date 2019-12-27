import { Component, OnInit } from '@angular/core';
import { KoreanService } from 'src/app/services/korean.service';

@Component({
  selector: 'app-korean',
  templateUrl: './korean.component.html',
  styleUrls: ['./korean.component.css']
})
export class KoreanComponent implements OnInit {
  meals: string[]
  constructor(private koreanService: KoreanService) { }

  ngOnInit() {

    this.koreanService.getKoreanMeals()
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
