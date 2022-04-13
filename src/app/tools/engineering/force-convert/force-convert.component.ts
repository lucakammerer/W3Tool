import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-force-convert',
  templateUrl: './force-convert.component.html',
  styleUrls: ['./force-convert.component.sass']
})
export class ForceConvertComponent implements OnInit {
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

  units = ["newton [N]", "kilonewton [kN]", "gram-force [gf]", "kilogram-force [kgf]", "ton-force (metric) [tf]"]
  unitsAsUri = ["newton", "kilonewton", "gram force", "kilogram force", "ton force"]
  defaultValues = [this.units[0], this.units[1]]
  valueInJoule = 0;
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
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Force Converter Tool'
        : 'Force Converter - Convert Force units',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Force Unit Converter is a tool for converting between Newton, Kilonewton, Gram force and more units.'
        : 'Force Unit Converter is a tool for converting between Newton, Kilonewton, Gram force and more units.',
      keywords: ["force unit converter", "free converter", "force converter", "force conversion tool", "conversion tool", "online tool"]
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
        this.valueInJoule = this.currentValue * 0.00980665
        break;
      case this.units[3]:
        this.valueInJoule = this.currentValue * 9.80665
        break;
      case this.units[4]:
        this.valueInJoule = this.currentValue * 9806.65
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
        this.result = (this.valueInJoule / 0.00980665).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInJoule / 9.80665).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInJoule / 9806.65).toString()
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
