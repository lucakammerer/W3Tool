import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.sass']
})
export class CharacterCounterComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Character Counter - Count the character of a text',
      date: new Date(),
      description: 'The Character Counter is a free tool for counting the characters of large texts',
      keywords: ["character counter", "free character counter", "counting characters", "char counter tool", "character counting tool", "online tool"]
    });
  }

  result = 0

  count() {
    this.result  = this.form.value.text.length
  }

  ngOnInit(): void {
  }

}
