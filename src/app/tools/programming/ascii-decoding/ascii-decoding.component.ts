import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-ascii-decoding',
  templateUrl: './ascii-decoding.component.html',
  styleUrls: ['./ascii-decoding.component.sass']
})
export class AsciiDecodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'ASCII Decoder - W3Tool',
      date: new Date(),
      description: 'ASCII Decoder is a free online tool for decoding a list of ASCII characters to a text.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  decoding() {
    var s = this.form.value.text.split(" ")
    var resultAsArray = []

    for(let i = 0; i < s.length; i++){
      let code = String.fromCharCode(s[i]);
      resultAsArray.push(code);
    }

    this.result = resultAsArray.join("").toString();

  }

  ngOnInit(): void {
  }

}
