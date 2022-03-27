import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-volume-convert',
  templateUrl: './volume-convert.component.html',
  styleUrls: ['./volume-convert.component.sass']
})
export class VolumeConvertComponent implements OnInit {
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

  units = ["cubic meter [m³]", "cubic kilometer [km³]", "cubic centimeter [cm³]", "cubic millimeter [mm³]", "liter [L]", "milliliter [mL]", "gallon [gal]", "quart [qt]", "pint [pt]", "cup"]
  defaultValues = [this.units[0], this.units[1]]
  valueInCubicMeter = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Volume Convert - W3Tool',
      date: new Date(),
      description: 'Volume Converter is a free online tool for converting different volume units',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInCubicMeter = this.currentValue
        break;
      case this.units[1]:
        this.valueInCubicMeter = this.currentValue * 1000000000
        break;
      case this.units[2]:
        this.valueInCubicMeter = this.currentValue * 0.000001
        break;
      case this.units[3]:
        this.valueInCubicMeter = this.currentValue * 0.000000001
        break;
      case this.units[4]:
        this.valueInCubicMeter = this.currentValue * 0.001
        break;
      case this.units[5]:
        this.valueInCubicMeter = this.currentValue * 0.000001
        break;
      case this.units[6]:
        this.valueInCubicMeter = this.currentValue * 0.0037854118
        break;
      case this.units[7]:
        this.valueInCubicMeter = this.currentValue * 0.0009463529
        break;
      case this.units[8]:
        this.valueInCubicMeter = this.currentValue * 0.0004731765
        break;
      case this.units[9]:
        this.valueInCubicMeter = this.currentValue * 0.0002365882
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInCubicMeter.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInCubicMeter / 1000000000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInCubicMeter / 0.000001).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInCubicMeter / 0.000000001).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInCubicMeter / 0.001).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInCubicMeter / 0.000001).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInCubicMeter / 0.0037854118).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInCubicMeter / 0.0009463529).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInCubicMeter / 0.0004731765).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInCubicMeter / 0.0002365882).toString()
        break;
    }
  }

  ngOnInit(): void {
  }


}
