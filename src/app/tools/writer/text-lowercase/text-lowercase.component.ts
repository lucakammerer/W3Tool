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
      title: 'Text Lowercase - W3Tool',
      date: new Date(),
      description: 'Text Lowercase is a free tool to convert a text to lowercase.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  lowercase() {
    this.result = this.form.value.text.toLowerCase();
  }

  ngOnInit(): void {
  }


}
