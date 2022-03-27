import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {tools} from '../global';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.sass']
})
export class ToollistComponent implements OnInit {


  items = tools;

  constructor(
    public router: Router,
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Terms of Use - W3Tool',
      date: new Date(),
      description: 'W3Tool Online Tools » Up to 50 Tools available ✓ Easy to use ✓ For free ✓ 30 Tools every month ✓ Visit now!',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  ngOnInit(): void {
  }

}
