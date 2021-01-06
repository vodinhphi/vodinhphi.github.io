import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  public result;
  Calculator = new FormGroup({
    numberOne : new FormControl(''),
    numberTwo : new FormControl(''),
    // calculation : new FormControl('')
  })

  /**
   * Calc: hàm thực hiến phép tính theo X : 1= cộng , 2 = Trừ, 3 = Nhân, 4 = Chia
   */
  public  Calc(x) {
    // this.Calculator.value.calculation = 1;
    calculation:this.Calculator.value.calculation = x;// Khợi tạo biến calculation gán value = x
    this.serverHttp.getConfig('/Calc',this.Calculator.value).subscribe((data) => {
      console.log(data);
      this.result = data;
    });
  }

  constructor(
    private serverHttp: ServerHttpService
  ) {

  }

  ngOnInit(): void {
  }

}
