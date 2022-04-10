import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-random-letter',
  templateUrl: './random-letter.component.html',
  styleUrls: ['./random-letter.component.sass']
})
export class RandomLetterComponent implements OnInit {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  result = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Random Letter Picker - Get a random letter',
      date: new Date(),
      description: 'Random letter is a free online tool for picking a random letter from this list: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]',
      keywords: ["random letter", "free random letter picker", "randomizer", "random letter tool", "random picker tool", "online tool"]
    });
  }

  generate() {
    this.result = this.letters[Math.floor(Math.random()*this.letters.length)];
  }

  ngOnInit(): void {
  }

}
