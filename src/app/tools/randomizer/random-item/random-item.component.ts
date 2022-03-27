import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-random-item',
  templateUrl: './random-item.component.html',
  styleUrls: ['./random-item.component.sass']
})
export class RandomItemComponent implements OnInit {
  form = new FormGroup({
    list: new FormControl(),
  });

  result = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Random Item - W3Tool',
      date: new Date(),
      description: 'Random item is a free online tool for picking a random item from a list',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  generate() {
    console.log(this.form.value.list)
    var list = this.form.value.list.split(",")
    this.result = list[Math.floor(Math.random() * list.length)];
  }

  ngOnInit(): void {
  }

}
