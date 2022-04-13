import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-temperature-convert',
  templateUrl: './temperature-convert.component.html',
  styleUrls: ['./temperature-convert.component.sass']
})
export class TemperatureConvertComponent implements OnInit {
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

  units = ["kelvin [K]", "Celsius [°C]", "Fahrenheit [°F]", "Rankine [°R]", "Reaumur [°r]", "Triple point of water"]
  unitsAsUri = ["kelvin", "celsius", "fahrenheit", "rankine", "reaumur", "triple point of water"]
  defaultValues = [this.units[0], this.units[1]]
  valueInCelsius = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    var routeUrl = this.route.snapshot.params['un'];
    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Temperature Converter'
        : 'Temperature Converter',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Temperature Conversion Tool is a free tool to convert between Kelvin, Celsius, Fahrenheit, Rankine and other temperature units.'
        : 'Temperature Conversion Tool is a free tool to convert between Kelvin, Celsius, Fahrenheit, Rankine and other temperature units.',
      keywords: ["temperature unit converter", "free temperature converter", "temperature converter", "temperature conversion tool", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInCelsius = this.currentValue * -272.15
        break;
      case this.units[1]:
        this.valueInCelsius = this.currentValue
        break;
      case this.units[2]:
        this.valueInCelsius = this.currentValue * -17.222222222
        break;
      case this.units[3]:
        this.valueInCelsius = this.currentValue * -272.59444444
        break;
      case this.units[4]:
        this.valueInCelsius = this.currentValue * 1.25
        break;
      case this.units[5]:
        this.valueInCelsius = this.currentValue * 0.01
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = (this.valueInCelsius / -272.15).toString()
        break;
      case this.units[1]:
        this.result = this.valueInCelsius.toString()
        break;
      case this.units[2]:
        this.result = (this.valueInCelsius / -17.222222222).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInCelsius / -272.59444444).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInCelsius / 1.25).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInCelsius / 0.01).toString()
        break;
    }
  }

  ngOnInit(): void {
    var routes = this.route.snapshot.params['un'];

    if (routes != null) {
      routes = routes.split("-")

      if (this.unitsAsUri.includes(routes[0].toLowerCase()) && this.unitsAsUri.includes(routes[1].toLowerCase())) {
        this.defaultValues[0] = this.units[this.unitsAsUri.indexOf(routes[0].toLowerCase())]
        this.defaultValues[1] = this.units[this.unitsAsUri.indexOf(routes[1].toLowerCase())]
      }
    }
  }

}
