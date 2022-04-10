import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-time-convert',
  templateUrl: './time-convert.component.html',
  styleUrls: ['./time-convert.component.sass']
})
export class TimeConvertComponent implements OnInit {
  form = new FormGroup({
    value: new FormGroup({
      inputValue: new FormControl(),
      outputValue: new FormControl(),
    }),
    selection: new FormGroup({
      inputSelection: new FormControl(),
      outputSelection: new FormControl(),
    }),
  });

  units = ["second [s]", "millisecond [ms]", "minute [min]", "hour [h]", "day [d]", "week", "month", "year [y]", "decade", "century", "millennium", "microsecond [µs]", "nanosecond [ns]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInSecond = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Time Conversion Calculator',
      date: new Date(),
      description: 'The Time Converter is a free online tool for converting between Second, Millisecond, Minute, Hour, Day, Week, Month, Year and more time units.',
      keywords: ["time unit converter", "free time converter", "time converter", "time conversion tool", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInSecond = this.currentValue
        break;
      case this.units[1]:
        this.valueInSecond = this.currentValue * 0.001
        break;
      case this.units[2]:
        this.valueInSecond = this.currentValue * 60
        break;
      case this.units[3]:
        this.valueInSecond = this.currentValue * 3600
        break;
      case this.units[4]:
        this.valueInSecond = this.currentValue * 86400
        break;
      case this.units[5]:
        this.valueInSecond = this.currentValue * 604800
        break;
      case this.units[6]:
        this.valueInSecond = this.currentValue * 2628000
        break;
      case this.units[7]:
        this.valueInSecond = this.currentValue * 31557600
        break;
      case this.units[8]:
        this.valueInSecond = this.currentValue * 315576000
        break;
      case this.units[9]:
        this.valueInSecond = this.currentValue * 3155760000
        break;
      case this.units[10]:
        this.valueInSecond = this.currentValue * 31557600000
        break;
      case this.units[11]:
        this.valueInSecond = this.currentValue * 0.000001
        break;
      case this.units[12]:
        this.valueInSecond = this.currentValue * 0.000000001
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInSecond.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInSecond / 0.001).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInSecond / 60).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInSecond / 3600).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInSecond / 86400).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInSecond / 604800).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInSecond / 2628000).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInSecond / 31557600).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInSecond / 315576000).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInSecond / 3155760000).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInSecond / 31557600000).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInSecond / 0.000001).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInSecond / 0.000000001).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
