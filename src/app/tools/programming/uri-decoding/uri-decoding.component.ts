import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-uri-decoding',
  templateUrl: './uri-decoding.component.html',
  styleUrls: ['./uri-decoding.component.sass']
})
export class UriDecodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'URI Decoder',
      date: new Date(),
      description: 'URI Decoder is a free online tool for decoding an URI to a text.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  decoding() {
    this.result = decodeURI(this.form.value.text)
  }


  ngOnInit(): void {
  }


}
