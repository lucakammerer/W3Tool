import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  defaultValues = [this.units[0], this.units[1]]
  valueInDecimal = "";
  currentValue = "";
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Numeral Converter - Convert Binary, Hexadecimal, Octal and Decimal system',
      date: new Date(),
      description: 'The Numeral Conversion Tool is a free tool for converting between the Binary, Hexadecimal, Octal and Decimal system.',
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
  }

}
