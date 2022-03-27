import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-power-convert',
  templateUrl: './power-convert.component.html',
  styleUrls: ['./power-convert.component.sass']
})
export class PowerConvertComponent implements OnInit {

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Power Convert - W3Tool',
      date: new Date(),
      description: 'W3Tool Online Tools » Up to 50 Tools available ✓ Easy to use ✓ For free ✓ 30 Tools every month ✓ Visit now!',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  ngOnInit(): void {
  }

}
