import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-js-minifier',
  templateUrl: './js-minifier.component.html',
  styleUrls: ['./js-minifier.component.sass']
})
export class JsMinifierComponent implements OnInit {

  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'JavaScript Minifier - W3Tool',
      date: new Date(),
      description: 'Minimize your JavaScript code for better performance. JavaScript minifier is a free online tool for minimizing large JavaScript files.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = ""

  minimize() {
    this.result = this.form.value.text
      .replace("(?s)\s|/\*.*?\*/|//[^\r\n]*",'');
  }

  ngOnInit(): void {
  }

}
