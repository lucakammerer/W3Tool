import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MetaService } from './../../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-reverse',
  templateUrl: './text-reverse.component.html',
  styleUrls: ['./text-reverse.component.sass']
})
export class TextReverseComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Text Reverse Converter - Reverse a text',
      date: new Date(),
      description: 'The Text Reverse Converter is a free online tool for reversing the characters of a text.',
      keywords: ["text reverse converter", "free text reverser", "reverse converter", "reverse conversion tool", "text reverse tool", "online tool"]
    });
  }

  result = ""

  reverse() {
    this.result = this.form.value.text.split("").reverse().join("");
  }

  ngOnInit(): void {
  }


}
