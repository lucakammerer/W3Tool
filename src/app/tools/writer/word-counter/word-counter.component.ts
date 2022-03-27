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
      title: 'Word Counter - W3Tool',
      date: new Date(),
      description: 'Word Counter is a free online tool for counting words of large texts',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  result = 0

  count() {
    this.result  = this.form.value.text.split(" ", 5000).length;
  }

  ngOnInit(): void {
  }
}
