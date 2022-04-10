import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-area-convert',
  templateUrl: './area-convert.component.html',
  styleUrls: ['./area-convert.component.sass']
})
export class AreaConvertComponent implements OnInit {

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

  units = ["square meter [m²]", "square kilometer [km²]","square centimeter [cm²]","square millimeter [mm²]","square micrometer [µm²]","hectare [ha]","acre [ac]","square mile [mi²]","square yard [yd²]","square foot [ft²]","square inch [in²]","square hectometer [hm²]","square dekameter [dam²]","square decimeter [dm²]","square nanometer [nm²]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInSquareMeter = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Area Converter - Convert different area units',
      date: new Date(),
      description: 'Area Converter is a free tool for converting Acres, Square Feet, Square Centimeters, Square Meters, Square Miles and other metric area units.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInSquareMeter = this.currentValue
        break;
      case this.units[1]:
        this.valueInSquareMeter = this.currentValue * 1000000
        break;
      case this.units[2]:
        this.valueInSquareMeter = this.currentValue * 0.0001
        break;
      case this.units[3]:
        this.valueInSquareMeter = this.currentValue * 0.000001
        break;
      case this.units[4]:
        this.valueInSquareMeter = this.currentValue * 1.E-12
        break;
      case this.units[5]:
        this.valueInSquareMeter = this.currentValue * 10000
        break;
      case this.units[6]:
        this.valueInSquareMeter = this.currentValue * 4046.8564224
        break;
      case this.units[7]:
        this.valueInSquareMeter = this.currentValue * 2589988.1103
        break;
      case this.units[8]:
        this.valueInSquareMeter = this.currentValue * 0.83612736
        break;
      case this.units[9]:
        this.valueInSquareMeter = this.currentValue * 0.09290304
        break;
      case this.units[10]:
        this.valueInSquareMeter = this.currentValue * 0.00064516
        break;
      case this.units[11]:
        this.valueInSquareMeter = this.currentValue * 10000
        break;
      case this.units[12]:
        this.valueInSquareMeter = this.currentValue * 100
        break
      case this.units[13]:
        this.valueInSquareMeter = this.currentValue * 0.1
        break;
      case this.units[14]:
        this.valueInSquareMeter = this.currentValue * 1.E-18
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInSquareMeter.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInSquareMeter / 1000000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInSquareMeter / 0.0001).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInSquareMeter / 0.000001).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInSquareMeter / 1.E-12).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInSquareMeter / 10000).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInSquareMeter / 4046.8564224).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInSquareMeter / 2589988.1103).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInSquareMeter / 0.83612736).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInSquareMeter / 0.09290304).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInSquareMeter / 0.00064516).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInSquareMeter / 10000).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInSquareMeter / 100).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInSquareMeter / 0.01).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInSquareMeter / 1.E-18).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
