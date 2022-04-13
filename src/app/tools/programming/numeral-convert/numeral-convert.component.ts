import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-numeral-convert',
  templateUrl: './numeral-convert.component.html',
  styleUrls: ['./numeral-convert.component.sass']
})
export class NumeralConvertComponent implements OnInit {

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

  units = ["Decimal", "Binary", "Hexadecimal", "Octal"]
  unitsAsUri = ["decimal", "binary", "hexadecimal", "octal"]
  defaultValues = [this.units[0], this.units[1]]
  valueInDecimal = "";
  currentValue = "";
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
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Numeral Converter'
        : 'Numeral Converter - Convert Binary, Hexadecimal, Octal and Decimal system',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. The Numeral Conversion Tool is a free tool for converting between the Binary, Hexadecimal, Octal and Decimal system.'
        : 'The Numeral Conversion Tool is a free tool for converting between the Binary, Hexadecimal, Octal and Decimal system.',
      keywords: ["numeral unit converter", "free binary hexadecimal converter", "octal binary converter", "hexadecimal octal conversion tool", "numeral tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInDecimal = this.currentValue.toString()
        break;
      case this.units[1]:
        this.valueInDecimal = (parseInt(this.currentValue, 2)).toString()
        break;
      case this.units[2]:
        this.valueInDecimal = (parseInt(this.currentValue, 16)).toString()
        break;
      case this.units[3]:
        this.valueInDecimal = (parseInt(this.currentValue, 8)).toString()
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInDecimal
        break;
      case this.units[1]:
        this.result = (parseInt(this.valueInDecimal)).toString(2);
        break;
      case this.units[2]:
        this.result = (parseInt(this.valueInDecimal)).toString(16);
        break;
      case this.units[3]:
        this.result = (parseInt(this.valueInDecimal)).toString(8);
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
