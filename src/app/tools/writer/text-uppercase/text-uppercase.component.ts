import { MetaService } from './../../../services/meta.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-uppercase',
  templateUrl: './text-uppercase.component.html',
  styleUrls: ['./text-uppercase.component.sass']
})
export class TextUppercaseComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Uppercase Converter - Convert a text to uppercase',
      date: new Date(),
      description: 'The Text Uppercase Converter is a free online tool for converting a text into uppercase characters.',
      keywords: ["text uppercase converter", "free text converter", "uppercase converter", "uppercase conversion tool", "text conversion tool", "online tool"]
    });
  }

  result = ""

  uppercase() {
    this.result = this.form.value.text.toUpperCase();
  }

  ngOnInit(): void {
  }


}
