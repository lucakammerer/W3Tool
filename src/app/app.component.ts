import { Component, OnInit } from '@angular/core';
import { AppearanceService } from './services/appearance.service';
import { CookiesService } from './services/cookies.service';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'w3tool';
  customAppearance = false
  customCookies = true;

  constructor(public appearance: AppearanceService, public cookies: CookiesService) {
  }

  ngOnInit() {
    this.customAppearance = (this.appearance.getCookie("appearance") == "true");
    this.customCookies = (this.cookies.getCookie("cookies") == "true");
  }

}
