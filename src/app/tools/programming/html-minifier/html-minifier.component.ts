import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-html-minifier',
  templateUrl: './html-minifier.component.html',
  styleUrls: ['./html-minifier.component.sass']
})
export class HtmlMinifierComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'HTML Minifier and Compressor',
      date: new Date(),
      description: 'Minimize and compress your HTML code for a better website performance. HTML Minifier is a free online tool for minimizing large HTML files.',
      keywords: ["html minifier", "free html minify", "html code compressor", "html minifier tool", "minify tool", "online tool"]
    });
  }

  result = ""

  minimize() {
    this.result = this.form.value.text
      .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
      .replace(/\>\s*\</g,'><');
  }

  ngOnInit(): void {
  }

}
