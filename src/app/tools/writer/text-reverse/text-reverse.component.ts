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
      title: 'Line Counter - W3Tool',
      date: new Date(),
      description: 'Text Lowercase is a free tool to reverse a text.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  reverse() {
    this.result = this.form.value.text.split("").reverse().join("");
  }

  ngOnInit(): void {
  }


}
