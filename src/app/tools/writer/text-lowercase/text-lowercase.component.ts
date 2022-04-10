import { MetaService } from './../../../services/meta.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-lowercase',
  templateUrl: './text-lowercase.component.html',
  styleUrls: ['./text-lowercase.component.sass']
})
export class TextLowercaseComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Lowercase Converter - Convert a text to lowercase',
      date: new Date(),
      description: 'The Text Lowercase Converter is a free online tool for converting a text into lowercase characters.',
      keywords: ["text lowercase converter", "free text converter", "lowercase converter", "lowercase conversion tool", "text conversion tool", "online tool"]
    });
  }

  result = ""

  lowercase() {
    this.result = this.form.value.text.toLowerCase();
  }

  ngOnInit(): void {
  }


}
