import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from '@src/app/services/meta.service';

@Component({
  selector: 'app-ascii-encoding',
  templateUrl: './ascii-encoding.component.html',
  styleUrls: ['./ascii-encoding.component.sass']
})
export class AsciiEncodingComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'ASCII Encoder - W3Tool',
      date: new Date(),
      description: 'ASCII Encoder is a free online tool for encoding a text into a list of ASCII characters.',
      keywords: ["ascii encoder", "free ascii encoder", "ascii code encoder", "ascii encoder tool", "encoding tool", "online tool"]
    });
  }

  result = ""

  encoding() {
    var s = this.form.value.text
    var resultAsArray = []

    for(let i = 0; i < s.length; i++){
      let code = s.charCodeAt(i);
      resultAsArray.push(code);
    }

    this.result = resultAsArray.join(" ").toString();

  }


  ngOnInit(): void {
  }
}
