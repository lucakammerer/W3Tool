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
      title: 'Line Counter - Count the lines of a text',
      date: new Date(),
      description: 'The Line Counter is a free tool for counting the lines of large texts',
      keywords: ["line counter", "free line counter", "counting text lines", "line counter tool", "line counting tool", "online tool"]
    });
  }

  result = 0

  count() {
    this.result = this.form.value.text.match(/^/gm).length;
  }

  ngOnInit(): void {
  }

}
