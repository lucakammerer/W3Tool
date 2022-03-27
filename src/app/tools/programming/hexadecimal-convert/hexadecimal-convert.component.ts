import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-hexadecimal-convert',
  templateUrl: './hexadecimal-convert.component.html',
  styleUrls: ['./hexadecimal-convert.component.sass']
})
export class HexadecimalConvertComponent implements OnInit {
  form = new FormGroup({
    decimal: new FormControl(),
    hexadecimal: new FormControl(),
  });

  decimal: any
  hex = ""

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Hexadecimal Convert - W3Tool',
      date: new Date(),
      description: 'Hexadecimal Converter is a free online tool for converting binary numbers to hexadecimal or hexadecimal numbers to binary',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert() {
    this.hex = this.form.value.decimal.toString(16);
    this.decimal = parseInt(this.form.value.hexadecimal, 16);
  }

  ngOnInit(): void {
  }

}
