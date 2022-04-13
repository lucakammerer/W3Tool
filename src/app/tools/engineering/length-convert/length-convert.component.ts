import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-length-convert',
  templateUrl: './length-convert.component.html',
  styleUrls: ['./length-convert.component.sass']
})
export class LengthConvertComponent implements OnInit {
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

  units = ["meter [m]", "kilometer [km]", "decimeter [dm]", "centimeter [cm]", "millimeter [mm]", "micrometer [µm]", "nanometer [nm]", "mile [mi]", "yard [yd]", "foot [ft]", "inch [in]", "light year [ly]", "exameter [Em]", "petameter [Pm]", "terameter [Tm]", "gigameter [Gm]"]
  unitsAsUri = ["meter", "kilometer", "decimeter", "centimeter", "millimeter", "micrometer", "nanometer", "mile", "yard", "foot", "inch", "light year", "exameter", "petameter", "terameter", "gigameter"]
  defaultValues = [this.units[0], this.units[1]]
  valueInMeter = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var routeUrl = this.route.snapshot.params['un'];
    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Length Converter Tool'
        : 'Length Converter Tool',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Free length conversion tool for converting Meter, Kilometer, Decimeter, Centimeter and more units.'
        : 'Free length conversion tool for converting Meter, Kilometer, Decimeter, Centimeter and more units.',
      keywords: ["length unit converter", "free length converter", "length converter", "length conversion", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInMeter = this.currentValue
        break;
      case this.units[1]:
        this.valueInMeter = this.currentValue * 1000
        break;
      case this.units[2]:
        this.valueInMeter = this.currentValue * 0.1
        break;
      case this.units[3]:
        this.valueInMeter = this.currentValue * 0.01
        break;
      case this.units[4]:
        this.valueInMeter = this.currentValue * 0.001
        break;
      case this.units[5]:
        this.valueInMeter = this.currentValue * 0.000001
        break;
      case this.units[6]:
        this.valueInMeter = this.currentValue * 0.000000001
        break;
      case this.units[7]:
        this.valueInMeter = this.currentValue * 1609.344
        break;
      case this.units[8]:
        this.valueInMeter = this.currentValue * 0.9144
        break;
      case this.units[9]:
        this.valueInMeter = this.currentValue * 0.3048
        break;
      case this.units[10]:
        this.valueInMeter = this.currentValue * 0.0254
        break;
      case this.units[11]:
        this.valueInMeter = this.currentValue * 9460730472580044
        break;
      case this.units[12]:
        this.valueInMeter = this.currentValue * 1000000000000000000
        break;
      case this.units[13]:
        this.valueInMeter = this.currentValue * 1000000000000000
        break;
      case this.units[14]:
        this.valueInMeter = this.currentValue * 1000000000000
        break;
      case this.units[15]:
        this.valueInMeter = this.currentValue * 1000000000
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInMeter.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInMeter / 1000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInMeter / 0.1).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInMeter / 0.01).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInMeter / 0.001).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInMeter / 0.000001).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInMeter / 0.000000001).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInMeter / 1609.344).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInMeter / 0.9144).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInMeter / 0.3048).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInMeter / 0.0254).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInMeter / 9460730472580044).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInMeter / 1000000000000000000).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInMeter / 1000000000000000).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInMeter / 1000000000000).toString()
        break;
      case this.units[15]:
        this.result = (this.valueInMeter / 1000000000).toString()
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
