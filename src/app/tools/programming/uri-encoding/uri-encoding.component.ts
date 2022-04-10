import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-uri-encoding',
  templateUrl: './uri-encoding.component.html',
  styleUrls: ['./uri-encoding.component.sass']
})
export class UriEncodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'URI Encoder',
      date: new Date(),
      description: 'URI Encoder is a free online tool for encoding a text to an URI.',
      keywords: ["uri encoder", "free uri encoder", "uri code encoder", "uri encoder tool", "encoding tool", "online tool"]
    });
  }

  result = ""

  encoding() {
    this.result = encodeURI(this.form.value.text)
  }


  ngOnInit(): void {
  }


}
