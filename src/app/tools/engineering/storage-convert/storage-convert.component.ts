import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-storage-convert',
  templateUrl: './storage-convert.component.html',
  styleUrls: ['./storage-convert.component.sass']
})
export class StorageConvertComponent implements OnInit {

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

  units = ["bit [b]", "nibble", "byte [B]", "character", "word", "MAPM-word","quadruple-word","block","kilobit [kb]","kilobyte [kB]","kilobyte (10³ bytes)","megabit [Mb]","megabyte [MB]","megabyte [10⁶ bytes]","gigabit [Gb]","gigabyte [GB]","gigabyte [10⁹]","terabit [Tb]","terabyte [TB]","terabyte [10¹²]","petabit [Pb]","petabyte [PB]","petabyte [10¹⁵]","exabit [Eb]","exabyte [EB]","exabyte [10¹⁸]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInByte = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Data Storage Converter',
      date: new Date(),
      description: 'The Data Storage Convertsion Tool is a free tool for converting between Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte, Exabyte and more storage units.',
      keywords: ["data storage unit converter", "free converter", "data storage converter", "data conversion tool", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInByte = this.currentValue * 0.125
        break;
      case this.units[1]:
        this.valueInByte = this.currentValue * 0.5
        break;
      case this.units[2]:
        this.valueInByte = this.currentValue
        break;
      case this.units[3]:
        this.valueInByte = this.currentValue
        break;
      case this.units[4]:
        this.valueInByte = this.currentValue * 2
        break;
      case this.units[5]:
        this.valueInByte = this.currentValue  * 4
        break;
      case this.units[6]:
        this.valueInByte = this.currentValue * 8
        break;
      case this.units[7]:
        this.valueInByte = this.currentValue * 512
        break;
      case this.units[8]:
        this.valueInByte = this.currentValue * 128
        break;
      case this.units[9]:
        this.valueInByte = this.currentValue * 1024
        break;
      case this.units[10]:
        this.valueInByte = this.currentValue * 1000
        break;
      case this.units[11]:
        this.valueInByte = this.currentValue * 131072
        break;
      case this.units[12]:
        this.valueInByte = this.currentValue * 1048576
        break
      case this.units[13]:
        this.valueInByte = this.currentValue * 1000000
        break;
      case this.units[14]:
        this.valueInByte = this.currentValue * 134217728
        break;
      case this.units[15]:
        this.valueInByte = this.currentValue * 1073741824
        break;
      case this.units[16]:
        this.valueInByte = this.currentValue * 1000000000
        break;
      case this.units[17]:
        this.valueInByte = this.currentValue * 137438953472
        break;
      case this.units[18]:
        this.valueInByte = this.currentValue * 1099511627776
        break;
      case this.units[19]:
        this.valueInByte = this.currentValue * 1000000000000
        break;
      case this.units[20]:
        this.valueInByte = this.currentValue * 140737488355329
        break;
      case this.units[21]:
        this.valueInByte = this.currentValue * 1125899906842580
        break;
      case this.units[22]:
        this.valueInByte = this.currentValue * 1000000000000000
        break;
      case this.units[23]:
        this.valueInByte = this.currentValue * 144115188075856450
        break;
      case this.units[24]:
        this.valueInByte = this.currentValue * 1152921504606851600
        break;
      case this.units[25]:
        this.valueInByte = this.currentValue * 1000000000000000000
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = (this.valueInByte / 0.125).toString()
        break;
      case this.units[1]:
        this.result = (this.valueInByte / 0.5).toString()
        break;
      case this.units[2]:
        this.result = this.valueInByte.toString()
        break;
      case this.units[3]:
        this.result = this.valueInByte.toString()
        break;
      case this.units[4]:
        this.result = (this.valueInByte / 2).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInByte / 4).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInByte / 8).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInByte / 512).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInByte / 128).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInByte / 1024).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInByte / 1000).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInByte / 131072).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInByte / 1048576).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInByte / 1000000).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInByte / 134217728).toString()
        break;
      case this.units[15]:
        this.result = (this.valueInByte / 1073741824).toString()
        break;
      case this.units[16]:
        this.result = (this.valueInByte / 1000000000).toString()
        break;
      case this.units[17]:
        this.result = (this.valueInByte / 137438953472).toString()
        break;
      case this.units[18]:
        this.result = (this.valueInByte / 1099511627776).toString()
        break;
      case this.units[19]:
        this.result = (this.valueInByte / 1000000000000).toString()
        break;
      case this.units[20]:
        this.result = (this.valueInByte / 140737488355329).toString()
        break;
      case this.units[21]:
        this.result = (this.valueInByte / 1125899906842580).toString()
        break;
      case this.units[22]:
        this.result = (this.valueInByte / 1000000000000000).toString()
        break;
      case this.units[23]:
        this.result = (this.valueInByte / 144115188075856450).toString()
        break;
      case this.units[24]:
        this.result = (this.valueInByte / 1152921504606851600).toString()
        break;
      case this.units[25]:
        this.result = (this.valueInByte / 1000000000000000000).toString()
        break;
    }
  }

  ngOnInit(): void {
  }

}
