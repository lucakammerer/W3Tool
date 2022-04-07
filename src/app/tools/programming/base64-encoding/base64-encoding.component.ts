import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-base64-encoding',
  templateUrl: './base64-encoding.component.html',
  styleUrls: ['./base64-encoding.component.sass']
})
export class Base64EncodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Base64 Encoder',
      date: new Date(),
      description: 'Base64 Encoder is a free online tool for encoding a text to base64.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  encoding() {
    this.result = btoa(this.form.value.text)
  }


  ngOnInit(): void {
  }

}