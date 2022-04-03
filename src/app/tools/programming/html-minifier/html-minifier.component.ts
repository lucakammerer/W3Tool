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
      title: 'HTML Minifier - W3Tool',
      date: new Date(),
      description: 'Minimize your HTML code for a better performance. HTML Minifier is a free online tool for minimizing large HTML files.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
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
