import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-base64-decoding',
  templateUrl: './base64-decoding.component.html',
  styleUrls: ['./base64-decoding.component.sass']
})
export class Base64DecodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Base64 Decoder - W3Tool',
      date: new Date(),
      description: 'Base64 Decoder is a free online tool for decoding base64 to a text.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  decoding() {
    this.result = atob(this.form.value.text)
  }


  ngOnInit(): void {
  }
}
