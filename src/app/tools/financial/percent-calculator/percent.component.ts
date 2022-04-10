import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.sass']
})
export class PercentComponent implements OnInit {

  form = new FormGroup({
    value: new FormGroup({
      valuepercent: new FormControl(),
      valueval: new FormControl(),
    }),
    percentage: new FormGroup({
      percentageval: new FormControl(),
      percentagebase: new FormControl(),
    }),
    basevalue: new FormGroup({
      basevaluepercent: new FormControl(),
      basevalueval: new FormControl(),
    }),
  });

  value = ''
  percentage = ''
  basevalue = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Percentage Calculator',
      date: new Date(),
      description: 'The Percentage Calculator is a free tool to calculate percentages. What is % of ? %. is what percent of ? %. What is the percentage increase/decrease?',
      keywords: ["percentage calculator", "free percentage calculator", "percentage calculator", "percentage calculation tool", "percentage tool", "online tool"]
    });
  }

  calculate() {
    this.value = ""
    this.percentage = ""
    this.basevalue = ""
    if(this.form.value.value.valuepercent != null && this.form.value.value.valueval){
      this.value += (this.form.value.value.valuepercent * 0.01) * this.form.value.value.valueval
    }
    if(this.form.value.percentage.percentageval != null && this.form.value.percentage.percentagebase != null){
      this.percentage += (this.form.value.percentage.percentageval / this.form.value.percentage.percentagebase) * 100
    }
    if(this.form.value.basevalue.basevaluepercent != null && this.form.value.basevalue.basevalueval){
      this.basevalue += this.form.value.basevalue.basevalueval / (this.form.value.basevalue.basevaluepercent / 100)
    }
  }

  ngOnInit(): void {
  }

}
