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
      title: 'CSS Minifier and Compressor - Fast CSS',
      date: new Date(),
      description: 'Minimize and compress your CSS files for faster ode speed. CSS Minifier is a free online tool for minimizing large CSS files.',
      keywords: ["css minifier", "free css minify", "css code compressor", "css minifier tool", "minify tool", "online tool"]
    });
  }

  result = ""

  minimize() {
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
