import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-css-minifier',
  templateUrl: './css-minifier.component.html',
  styleUrls: ['./css-minifier.component.sass']
})
export class CssMinifierComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Word Counter - W3Tool',
      date: new Date(),
      description: 'Word Counter is a free online tool for counting words of large texts',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  minify() {
    this.result = this.form.value.text
      .replace( /\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '' )
      .replace( / {2,}/g, ' ' )
      .replace( / ([{:}]) /g, '$1' )
      .replace( /([;,]) /g, '$1' )
      .replace( / !/g, '!' );
  }


  ngOnInit(): void {
  }

}
