import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.sass']
})
export class RandomNumberComponent implements OnInit {

  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
  });

  defaultFirst = 1
  defaultLast = 100
  result = Math.floor(Math.random() * (100 - 1 + 1) + 1)

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Random Number - W3Tool',
      date: new Date(),
      description: 'Random number is a free online tool for picking a random number',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  generate() {
    console.log(this.form.value.first + this.form.value.last)
    this.result = Math.floor(Math.random() * (this.form.value.last - this.form.value.first + 1) + this.form.value.first)
  }

  ngOnInit(): void {
  }
}
