import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from './../../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.sass']
})
export class BmiCalculatorComponent implements OnInit {

  form = new FormGroup({
    values: new FormGroup({
      height: new FormControl(),
      weight: new FormControl(),
    }),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'BMI Calculator - Calculate your Body Mass Index',
      date: new Date(),
      description: 'The Simple Body Mass Index Calculator is a free simple tool for calculating your BMI value.',
      keywords: ["bmi calculator", "free bmi calculator", "body mass index calculator", "bmi calculation tool", "health tool", "online tool"]
    });
  }

  result = ""

  calculate() {
    this.result = (this.form.value.values.weight / this.form.value.values.height).toString()
  }

  ngOnInit(): void {
  }

}
