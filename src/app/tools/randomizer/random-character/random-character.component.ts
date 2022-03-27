import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.sass']
})
export class RandomCharacterComponent implements OnInit {
  characters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','|','\\','/',':',';','"','\'','<','>',',','.','?']
  result = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Random Character - W3Tool',
      date: new Date(),
      description: "Random character is a free online tool for picking a random character from this character list: [~, `, !, @, #, $, %, ^, &, *, &#40;, &#41;, -, _, +, =, &#0123;, &#0125;, [, ], |,  \,  /, :, ;, \", ', &lt;, &gt;, , , ., ?]",
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  generate() {
    this.result = this.characters[Math.floor(Math.random()*this.characters.length)];
  }

  ngOnInit(): void {
  }

}
