import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-line-counter',
  templateUrl: './line-counter.component.html',
  styleUrls: ['./line-counter.component.sass']
})
export class LineCounterComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Line Counter - W3Tool',
      date: new Date(),
      description: 'Line Counter is a free online tool for counting lines of large texts',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = 0

  count() {
    this.result = this.form.value.text.match(/^/gm).length;
  }

  ngOnInit(): void {
  }

}
