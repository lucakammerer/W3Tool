import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-weight-and-mass-convert',
  templateUrl: './weight-and-mass-convert.component.html',
  styleUrls: ['./weight-and-mass-convert.component.sass']
})
export class WeightAndMassConvertComponent implements OnInit {

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

  units = ["kilogram [kg]", "gram [g]", "milligram [mg]", "ton (metric) [t]", "ounce [oz]", "carat [car, ct]", "ton (short) [ton (US)]", "ton (long) [ton (UK)]", "Atomic mass unit [u]", "exagram [Eg]", "petagram [Pg]", "teragram [Tg]", "gigagram [Gg]", "megagram [Mg]"]
  unitsAsUri = ["kilogram", "gram", "milligram", "ton", "ounce", "carat", "ton [US]", "ton [UK]", "Atomic mass unit", "exagram", "petagram", "teragram", "gigagram", "megagram"]
  defaultValues = [this.units[0], this.units[1]]
  valueInKilogram = 0;
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
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Weight and Mass Converter'
        : 'Weight and Mass Converter - Convert Weight and Mass units',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Weight and Mass Converter is a free tool for converting between kilogram, gram, milligram, ton, ounce, carat and more weight and mass units.'
        : 'Weight and Mass Converter is a free tool for converting between kilogram, gram, milligram, ton, ounce, carat and more weight and mass units.',
      keywords: ["weight and mass unit converter", "free weight and mass converter", "weight and mass converter", "weight and mass conversion tool", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInKilogram = this.currentValue
        break;
      case this.units[1]:
        this.valueInKilogram = this.currentValue * 0.001
        break;
      case this.units[2]:
        this.valueInKilogram = this.currentValue * 0.000001
        break;
      case this.units[3]:
        this.valueInKilogram = this.currentValue * 1000
        break;
      case this.units[4]:
        this.valueInKilogram = this.currentValue * 0.45359237
        break;
      case this.units[5]:
        this.valueInKilogram = this.currentValue * 0.0293495231
        break;
      case this.units[6]:
        this.valueInKilogram = this.currentValue * 0.0002
        break;
      case this.units[7]:
        this.valueInKilogram = this.currentValue * 907.18474
        break;
      case this.units[8]:
        this.valueInKilogram = this.currentValue * 1016.0469088
        break;
      case this.units[9]:
        this.valueInKilogram = this.currentValue * 1.660540199E-27
        break;
      case this.units[10]:
        this.valueInKilogram = this.currentValue * 1000000000000000
        break;
      case this.units[11]:
        this.valueInKilogram = this.currentValue * 1000000000000
        break;
      case this.units[12]:
        this.valueInKilogram = this.currentValue * 1000000000
        break;
      case this.units[13]:
        this.valueInKilogram = this.currentValue * 1000000
        break;
      case this.units[14]:
        this.valueInKilogram = this.currentValue * 1000
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInKilogram.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInKilogram / 0.001).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInKilogram / 0.000001).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInKilogram / 1000).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInKilogram / 0.45359237).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInKilogram / 0.0283495231).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInKilogram / 0.0002).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInKilogram / 907.18474).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInKilogram / 1016.0469088).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInKilogram / 1.660540199E-27).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInKilogram / 1000000000000000).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInKilogram / 1000000000000).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInKilogram / 1000000000).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInKilogram / 1000000).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInKilogram / 1000).toString()
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
