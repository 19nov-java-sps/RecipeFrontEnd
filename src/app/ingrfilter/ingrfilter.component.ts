import { Component, OnInit } from '@angular/core';
import {INGRS} from "../ingr"
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ingrfilter',
  templateUrl: './ingrfilter.component.html',
  styleUrls: ['./ingrfilter.component.css']
})
export class IngrfilterComponent implements OnInit {

  ingrfilter = INGRS;

  myForm2: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm2=this.fb.group({
      useringr: this.fb.array([])
    });
  }

  onChange(ingr: string, isChecked: boolean) {

    const ingrFormArray = <FormArray>this.myForm2.controls.useringr;
  if (isChecked) {
    ingrFormArray.push(new FormControl(ingr));
  }else{
    let index = ingrFormArray.controls.findIndex(x => x.value ==ingr)
    ingrFormArray.removeAt(index);
  }
    
  }

}
