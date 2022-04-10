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
      title: 'BMI Calculator - W3Tool',
      date: new Date(),
      description: 'BMI is a free online tool for calculating your Body Mass Index.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  calculate() {
    this.result = (this.form.value.values.weight / this.form.value.values.height).toString()
  }

  ngOnInit(): void {
  }

}
