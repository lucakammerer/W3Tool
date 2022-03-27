import { CookiesService } from './../services/cookies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.sass']
})
export class CookiePopupComponent implements OnInit {

  constructor(public cookies: CookiesService) { }

  ngOnInit(): void {
  }

}
