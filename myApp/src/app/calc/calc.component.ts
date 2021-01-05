import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  Calculator = new FormGroup({
    numX : new FormControl(''),
    numY : new FormControl(''),
    result: new FormControl('')

  })

  /**
   * add
   */
  public  add() {
    this.Calculator.value.result = parseInt(this.Calculator.value.numX)  + parseInt(this.Calculator.value.numY);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
