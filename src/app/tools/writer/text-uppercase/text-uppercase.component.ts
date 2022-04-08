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
      title: 'Line Counter - W3Tool',
      date: new Date(),
      description: 'Text Lowercase is a free tool to convert a text to uppercase.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  uppercase() {
    this.result = this.form.value.text.toUpperCase();
  }

  ngOnInit(): void {
  }


}
