import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-energy-convert',
  templateUrl: './energy-convert.component.html',
  styleUrls: ['./energy-convert.component.sass']
})
export class EnergyConvertComponent implements OnInit {
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

  units = ["joule [J]", "kilojoule [kJ]", "kilowatt-hour [kW*h]", "watt-hour [W*h]", "calorie", "horsepower"]
  defaultValues = [this.units[0], this.units[1]]
  valueInJoule = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Energy Convert - W3Tool',
      date: new Date(),
      description: 'Energy Converter is a free online tool for converting different energy units',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInJoule = this.currentValue
        break;
      case this.units[1]:
        this.valueInJoule = this.currentValue * 1000
        break;
      case this.units[2]:
        this.valueInJoule = this.currentValue * 3600000
        break;
      case this.units[3]:
        this.valueInJoule = this.currentValue * 3600
        break;
      case this.units[4]:
        this.valueInJoule = this.currentValue * 4186.8
        break;
      case this.units[5]:
        this.valueInJoule = this.currentValue * 2647795.5
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInJoule.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInJoule / 1000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInJoule / 3600000).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInJoule / 3600).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInJoule / 4186.8).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInJoule / 2647795.5).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
