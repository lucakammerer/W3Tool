import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.sass']
})
export class WordCounterComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Word Counter - Count the number of words in a text',
      date: new Date(),
      description: 'Word Counter is a free online tool for counting the number of words in a large text',
      keywords: ["word counter", "free word counter", "counting text words", "word counter tool", "word counting tool", "online tool"]
    });
  }

  result = 0

  count() {
    this.result  = this.form.value.text.split(" ", 5000).length;
  }

  ngOnInit(): void {
  }
}
