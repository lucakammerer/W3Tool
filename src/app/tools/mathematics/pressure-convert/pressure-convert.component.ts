import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-pressure-convert',
  templateUrl: './pressure-convert.component.html',
  styleUrls: ['./pressure-convert.component.sass']
})
export class PressureConvertComponent implements OnInit {

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

  units = ["pascal [Pa]","kilopascal [kPa]","bar","psi [psi]","ksi [ksi]","Standard atmosphere [atm]","exapascal [EPa]","petapascal [PPa]","terapascal [TPa]","gigapascal [GPa]","megapascal [MPa]","hectopascal [hPa]","dekapascal [daPa]","decipascal [dPa]","centipascal [cPa]","millipascal [mPa]","micropascal [µPa]","nanopascal [nPa]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInPascal = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Pressure Converter - W3Tool',
      date: new Date(),
      description: 'Pressure Converter is a free online tool for converting different units of pressure',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInPascal = this.currentValue
        break;
      case this.units[1]:
        this.valueInPascal = this.currentValue * 1000
        break;
      case this.units[2]:
        this.valueInPascal = this.currentValue * 100000
        break;
      case this.units[3]:
        this.valueInPascal = this.currentValue * 6894.7572932
        break;
      case this.units[4]:
        this.valueInPascal = this.currentValue * 6894757.2932
        break;
      case this.units[5]:
        this.valueInPascal = this.currentValue  * 101325
        break;
      case this.units[6]:
        this.valueInPascal = this.currentValue * 1000000000000000000
        break;
      case this.units[7]:
        this.valueInPascal = this.currentValue * 1000000000000000
        break;
      case this.units[8]:
        this.valueInPascal = this.currentValue * 1000000000000
        break;
      case this.units[9]:
        this.valueInPascal = this.currentValue * 1000000000
        break;
      case this.units[10]:
        this.valueInPascal = this.currentValue * 1000000
        break;
      case this.units[11]:
        this.valueInPascal = this.currentValue * 100
        break;
      case this.units[12]:
        this.valueInPascal = this.currentValue * 10
        break
      case this.units[13]:
        this.valueInPascal = this.currentValue * 0.1
        break;
      case this.units[14]:
        this.valueInPascal = this.currentValue * 0.01
        break;
      case this.units[15]:
        this.valueInPascal = this.currentValue * 0.001
        break;
      case this.units[16]:
        this.valueInPascal = this.currentValue * 0.000001
        break;
      case this.units[17]:
        this.valueInPascal = this.currentValue * 1.E-9
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInPascal.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInPascal / 1000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInPascal / 100000).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInPascal / 6894.7572932).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInPascal / 6894757.2932).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInPascal / 101325).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInPascal / 1000000000000000000).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInPascal / 1000000000000000).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInPascal / 1000000000000).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInPascal / 1000000000).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInPascal / 1000000).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInPascal / 100).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInPascal / 10).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInPascal / 0.1).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInPascal / 0.01).toString()
        break;
      case this.units[15]:
        this.result = (this.valueInPascal / 0.001).toString()
        break;
      case this.units[16]:
        this.result = (this.valueInPascal / 0.000001).toString()
        break;
      case this.units[17]:
        this.result = (this.valueInPascal / 1.E-9).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
