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
      title: 'Word Counter - W3Tool',
      date: new Date(),
      description: 'Word Counter is a free online tool for counting words of large texts',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  minify() {
    this.result = this.form.value.text
      .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
      .replace(/\>\s*\</g,'><');
  }

  ngOnInit(): void {
  }

}
