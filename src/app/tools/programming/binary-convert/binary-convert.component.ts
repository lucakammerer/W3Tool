import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-binary-convert',
  templateUrl: './binary-convert.component.html',
  styleUrls: ['./binary-convert.component.sass']
})
export class BinaryConvertComponent implements OnInit {
  form = new FormGroup({
    binary: new FormControl(),
    decimal: new FormControl(),
  });

  decimal: any
  binary: any

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Binary Convert - W3Tool',
      date: new Date(),
      description: 'Binary Converter is a free online tool for converting binary numbers to decimal and decimal numbers to binary',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  convert() {
    console.log(this.decimal + this.binary)
    this.decimal = parseInt(this.form.value.binary, 2);
    this.binary = (this.form.value.decimal >>> 0).toString(2);
  }

  ngOnInit(): void {
  }

}
