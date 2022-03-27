import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-cookies-and-privacy-policy',
  templateUrl: './cookies-and-privacy-policy.component.html',
  styleUrls: ['./cookies-and-privacy-policy.component.sass']
})
export class CookiesAndPrivacyPolicyComponent implements OnInit {

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Cookies and Privacy Policy - W3Tool',
      date: new Date(),
      description: 'W3Tool Online Tools » Up to 50 Tools available ✓ Easy to use ✓ For free ✓ 30 Tools every month ✓ Visit now!',
      robots: "NOINDEX, NOFOLLOW",
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  ngOnInit(): void {
  }

}
