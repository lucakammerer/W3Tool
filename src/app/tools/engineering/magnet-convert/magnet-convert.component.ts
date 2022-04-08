import { FormGroup, FormControl } from '@angular/forms';
import { MetaService } from './../../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magnet-convert',
  templateUrl: './magnet-convert.component.html',
  styleUrls: ['./magnet-convert.component.sass']
})
export class MagnetConvertComponent implements OnInit {

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

  units = ["Tesla [T]", "milliTesla [mT]", "Ampere/Meter [A/m]", "Ampere/Centimeter [A/cm]", "kiloAmpere/Meter [kA/m]", "Gauss [G]","Oersted [Oe]","Weber/m2 [Wb/m2]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInByte = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Magnet Converter - W3Tool',
      date: new Date(),
      description: 'Magnet Converter is a free online tool for converting different magnet units.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInByte = this.currentValue
        break;
      case this.units[1]:
        this.valueInByte = this.currentValue * 0.001
        break;
      case this.units[2]:
        this.valueInByte = this.currentValue * 0.0000012566370614359172
        break;
      case this.units[3]:
        this.valueInByte = this.currentValue * 0.00012566370614359172
        break;
      case this.units[4]:
        this.valueInByte = this.currentValue * 0.0012566370614359172
        break;
      case this.units[5]:
        this.valueInByte = this.currentValue * 0.0001
        break;
      case this.units[6]:
        this.valueInByte = this.currentValue * 0.0001
        break;
      case this.units[7]:
        this.valueInByte = this.currentValue * 1
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInByte.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInByte / 0.001).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInByte / 0.0000012566370614359172).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInByte / 0.00012566370614359172).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInByte / 0.0012566370614359172).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInByte / 0.0001).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInByte / 0.0001).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInByte / 1).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
